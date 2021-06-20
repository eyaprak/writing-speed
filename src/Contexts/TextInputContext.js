import React, { Component, createContext } from 'react'

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


class TextInputContextProvider extends Component {
    state = initState;
    addText = (text) => {
        let id = this.state.index;
        const newText = { ...text, id }
        this.setState({
            ...this.state,
            texts: [...this.state.texts, newText],
            index: id + 1
        })
    }

    render() {
        return (
            <TextInputContext.Provider value={{ ...this.state, addText: this.addText }}>
                {this.props.children}
            </TextInputContext.Provider>
        )
    }
}

export default TextInputContextProvider;