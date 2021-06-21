export const textReducer = (state, action) => {
    switch (action.type){
        case 'ADD_TEXT':
            let newText = {
                ...action.texts,
                id: state.index
            }
            localStorage.setItem('text', JSON.stringify(newText))
            return {
                ...state,
                texts:[...state.texts, newText],
                index: state.index + 1
            }
        case 'SET_SELECTED':
            return {
                ...state,
                selected: action.selected
            }
        default:
                break;
    }
        
}