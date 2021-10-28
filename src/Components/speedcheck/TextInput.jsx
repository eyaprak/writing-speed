import React, { useState, useContext, useEffect } from 'react';
import { TextInputContext } from '../../Contexts/TextInputContext';
import { ThemeContext } from '../../Contexts/ThemeContext'

const initialState = {
    entry: '',
    isDisabled: false,
    start: null,
    end: null
}

const TextInput = (props) => {
    const textContext = useContext(TextInputContext);
    const text = textContext.texts.find(t => t.id === textContext.selected).text

    const [state, setState] = useState(initialState)


    const changeHandler = (e) => {
        let { start } = state;
        if (start === null) {
            start = new Date().getTime();
        }
        if (e.target.value === '') {
            resetState();
        } else if (text.length + 1 === e.target.value.length) {
            stopAndCheck()
        } else {
            setState({
                ...state,
                [e.target.name]: e.target.value,
                start
            })
        }

    }

    const resetState = () => {
        setState(initialState)
        props.resetResult()
    }

    const stopAndCheck = () => {
        
        let end = new Date().getTime();
        const { entry, start } = state;
        const result = checkEntry(entry, end, start)
        props.setResult(result);
        setState({
            ...state,
            isDisabled: true,
            end
        })
    }

    const keyDownHandler = (e) => {
        if (e.ctrlKey && e.keyCode === 13) {
            setState({
                ...state,
                isDisabled: true,
                end: new Date().getTime()
            })
            stopAndCheck()
            // this.checkEntry()
        }
        if (e.ctrlKey && e.keyCode === 66) {
            resetState()
            document.getElementById("entry").focus();

        }

    }
    const checkEntry = (entry, end, start) => {
        let sum = 0;
        const arrChallenge = text.split(' ');
        const arrEntry = entry.split(' ');
        arrChallenge.forEach((c, i) => {
            for (let j = 0; j < c.length; j++) {
                if (arrEntry[i] && c[j] === arrEntry[i][j]) {
                    sum = sum + 1;
                }
            }
        });
        sum = sum + arrEntry.length - 1;
        let accuracy = (sum * 100 / text.length)
        let duration = (end - start) / 1000;
        let wordsPerMinute = (entry.length * 60) / (6 * duration);

        return {
            duration,
            accuracy: accuracy.toFixed(2),
            wordsPerMinute
        }
    }
    useEffect(() => {
        document.addEventListener("keydown", keyDownHandler);
        return () => {
            document.removeEventListener("keydown", keyDownHandler)
        }
    })
    /*
    componentDidMount() {
        document.addEventListener("keydown", this.keyDownHandler);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDownHandler)
    }
    */
    const pastHandler = (e) =>{
        e.preventDefault();
        alert('Kopyalama işlemi yapılamaz!')
    }
    return (
        <ThemeContext.Consumer>{(context) => {
            const theme = context.getTheme()
            return (
                <React.Fragment>
                    <div className="input-group mb-3">
                        <input type="text" name="entry" id="entry" autoComplete="off" onPaste={pastHandler} onChange={changeHandler} value={state.entry} disabled={state.isDisabled} className="form-control" placeholder="Write Text..." />
                        <div className="input-group-append">
                            <button className={`btn ${theme.button}`} onClick={resetState} type="button" id="button-addon2"><i className="fas fa-undo"></i></button>
                        </div>
                    </div>
                    <small className="text-muted">{`${text.length - state.entry.length} / ${text.length}`}</small>
                </React.Fragment>
            )
        }}

        </ThemeContext.Consumer>

    );

}

export default TextInput;