import React from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext'

const initialState = {
    entry: '',
    isDisabled: false,
    start: null,
    end: null
}

class TextInput extends React.Component {
    challenge = this.props.challenge
    state = initialState
    changeHandler = (e) => {
        let { start } = this.state;
        if (start === null) {
            start = new Date().getTime();
        }
        if (e.target.value === '') {
            this.resetState();
        } else if (this.challenge.length + 1 <= e.target.value.length) {
            this.stopAndCheck()
        } else {
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value,
                start
            })
        }

    }

    resetState = () => {
        this.setState(initialState)
        this.props.resetResult()
    }

    stopAndCheck = () => {

        let end = new Date().getTime();
        const { entry, start } = this.state;
        const result = this.checkEntry(entry, end, start)
        this.props.setResult(result);
        this.setState({
            ...this.state,
            isDisabled: true,
            end
        })
    }

    keyDownHandler = (e) => {
        if (e.ctrlKey && e.keyCode === 13) {
            this.setState({
                ...this.state,
                isDisabled: true,
                end: new Date().getTime()
            })
            this.stopAndCheck()
            //            this.checkEntry()
        }
        if (e.ctrlKey && e.keyCode === 66) {
            this.resetState()
            document.getElementById("entry").focus();

        }

    }
    checkEntry = (entry, end, start) => {
        let sum = 0;
        const arrChallenge = this.challenge.split(' ');
        const arrEntry = entry.split(' ');
        arrChallenge.forEach((c, i) => {
            for (let j = 0; j < c.length; j++) {
                if (arrEntry[i] && c[j] === arrEntry[i][j]) {
                    sum = sum + 1;
                }
            }
        });
        sum = sum + arrEntry.length - 1;
        let accuracy = (sum * 100 / this.challenge.length)
        let duration = (end - start) / 1000;
        let wordsPerMinute = (entry.length * 60) / (6 * duration);

        return {
            duration,
            accuracy: accuracy.toFixed(2),
            wordsPerMinute
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.keyDownHandler);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDownHandler)
    }


    render() {
        const { entry, isDisabled } = this.state;
        return (
            <ThemeContext.Consumer>{(context) => {
                const theme = context.getTheme()
                return (
                    <React.Fragment>
                        <div className="input-group mb-3">
                            <input type="text" name="entry" id="entry" autoComplete="off" onChange={this.changeHandler} value={entry} disabled={isDisabled} className="form-control" placeholder="Metni giriniz..." />
                            <div className="input-group-append">
                                <button className={`btn ${theme.button}`} onClick={this.resetState} type="button" id="button-addon2">Sıfırla</button>
                            </div>
                        </div>
                        <small className="text-muted">{`${this.challenge.length - entry.length} / ${this.challenge.length}`}</small>
                    </React.Fragment>
                )
            }}

            </ThemeContext.Consumer>

        );
    }
}

export default TextInput;