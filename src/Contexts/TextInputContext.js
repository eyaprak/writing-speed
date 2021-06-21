import React, { createContext, useState, useReducer, useEffect } from 'react'
import { textReducer } from '../Reducers/textReducer';

export const TextInputContext = createContext();
const initState = {
    texts: [
        { id: 1, text: "Keep your fears to yourself, but share your courage with others", difficulty: "easy" },
        { id: 2, text: "I cannot trust a man to control others who cannot control himself", difficulty: "medium" },
        { id: 3, text: "Management is doing things right; leadership is doing the right things", difficulty: "hard" }
    ],
    selected: 1,
    index: 4
}
const initResult = [
    {
        id: 1, textId: 2, scores: {
            duration: 2.5,
            accuracy: 83,
            wordsPerMinute: 50
        }
    },
    {
        id: 22, textId: 3, scores: {
            duration: 33,
            accuracy: 44,
            wordsPerMinute: 12
        }
    }

]
/*

*/

const TextInputContextProvider = (props) => {
    const [state, dispatch] = useReducer(textReducer, initState, () => {
        const data = localStorage.getItem('texts')
        return data ? JSON.parse(data) : initState;
    })
    //const [state, setState] = useState(initState);
    const data = localStorage.getItem('results');
    const [results, setResults] = useState(data ? JSON.parse(data) : initResult)

    /*
    const addText = (text) => {
        let id = state.index;
        const newText = { ...text, id }
        setState({
            ...state,
            texts: [...state.texts, newText],
            index: id + 1
        })
    }

    const setSelected = (id) => {
        setState({
            ...state,
            selected: id
        })
    }
    */

    useEffect(() => {
        localStorage.setItem('texts', JSON.stringify(state));
    }, [state])

    useEffect(() => {
        localStorage.setItem('results', JSON.stringify(results))
    }, [results])

    const addResult = (result) => {
        setResults([
            ...results, result
        ])
    }

    return (
        <TextInputContext.Provider value={{ ...state, results: [...results], dispatch, addResult }}>
            {props.children}
        </TextInputContext.Provider>
    )

}

export default TextInputContextProvider;