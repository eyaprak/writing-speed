import React, { useContext } from 'react'
import { TextInputContext } from '../../Contexts/TextInputContext'

const SelectText = () => {
    const { texts, selected, dispatch } = useContext(TextInputContext)
    const textList = texts.map(t => {
        return <option key={t.id} value={t.id}>{`${t.text} | ${t.difficulty} | ${t.text.length}`}</option>
    })
    const changeHandler = (e) =>{
        dispatch({type: 'SET_SELECTED', selected: Number(e.target.value)})
        //setSelected(Number(e.target.value))
    }
    return (
        <select className="form-control" name="text" id="text" value={selected} onChange={changeHandler}>
            {textList}
        </select>
    );
}

export default SelectText;