import React, { useContext } from 'react';
import { TextInputContext } from '../../Contexts/TextInputContext';
import { ThemeContext } from '../../Contexts/ThemeContext';

function Info() {
    const textContext = useContext(TextInputContext);
    const theme = useContext(ThemeContext).getTheme();
    const texts = textContext.texts.find(t => t.id === textContext.selected).text
    return (
        //const texts = textContext.texts.find(t => t.id === textContext.selected).text
        <div className={`card text-center border ${theme.card}`}>
            <div className="card-header">
                <h3>Writing Speed Test</h3>
            </div>
            <div className="card-body">
                <p>Your time will start when you start entering the text below into the box.</p>
                <p>You can press <span className="badge bg-primary">'ctrl + Enter'</span> to finish test.</p>
                <p>You can use <span className="badge bg-danger">'ctrl + B'</span> to reset test.</p>
                <p>Test will be finished automatically when the number of letters is greater than the total number of letters.</p>
            </div>
            <div className="card-footer">
                <span style={{ color: '#dc3545', fontWeight: 'bold' }}>Text: </span>{texts}
            </div>
        </div >
    );
}

export default Info;