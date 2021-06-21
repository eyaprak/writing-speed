import React, { useContext } from 'react';
import { TextInputContext } from '../../Contexts/TextInputContext';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { ScoreTypes } from '../data/Types'
import ScoreCard from './ScoreCard';
//import { v4 as uuidv4 } from 'uuid';

const Score = ({ values }) => {
    const theme = useContext(ThemeContext).getTheme();
    const { addResult, selected } = useContext(TextInputContext);

    const clickHandler = () =>{
        //let id =  uuidv4()
        addResult({
            id: new Date().getTime(),
            textId: selected,
            scores: values
        })
    }
    return ( 
        <React.Fragment>
            <div className="row mb-2">
                {
                    Object.entries(values).map(([key, value]) => {
                        return <ScoreCard type={ScoreTypes[key]} key={key} value={value} />
                    })
                }
            </div>
            <button type="button" className={`btn btn-outline-success w-100 ${theme.button}`} onClick={clickHandler}>Sonucu Kaydet</button>
        </React.Fragment>
    );
}

export default Score;