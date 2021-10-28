import React, { useState, useContext } from 'react';
import { TextInputContext } from '../../Contexts/TextInputContext'
import { ThemeContext } from '../../Contexts/ThemeContext'
const initState = {
    text: '',
    difficulty: ''
}
const AddTexts = () => {
    const [texts, setTexts] = useState(initState)

    const { dispatch } = useContext(TextInputContext)
    const theme = useContext(ThemeContext).getTheme();

    const changeHandler = (e) => {
        setTexts({
            ...texts,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TEXT', texts})
        //addText(texts)
        setTexts(initState)
    }
    return (
        <div className={`card ${theme.card} border`}>
            <div className="card-header text-center">
                <h4 className="card-title">Add Text</h4>
            </div>
            <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="text">Text:</label>
                        <input type="text" name="text" className="form-control" onChange={changeHandler} value={texts.text} autoComplete="off" placeholder="Write text..." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="difficulty">Diffuculty: </label>
                        <select name="difficulty" id="difficulty" onChange={changeHandler} className="form-control" value={texts.difficulty}>
                            <option value="">Select</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Normal</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <button className={`btn ${theme.button} mt-2`} type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}
export default AddTexts;