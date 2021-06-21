import React, { useContext } from 'react'
import { TextInputContext } from '../../Contexts/TextInputContext';
import { ThemeContext } from '../../Contexts/ThemeContext';

function Results() {
    const { results } = useContext(TextInputContext);
    const theme = useContext(ThemeContext).getTheme();
    console.log(results)
    const resultRows = results ? results.map(r => {
        return <tr key={r.textId}>
            <td>{r.textId}</td>
            <td>{parseFloat(r.scores.accuracy).toFixed(2)}%</td>
            <td>{parseFloat(r.scores.duration).toFixed(2)} sec.</td>
            <td>{parseFloat(r.scores.wordsPerMinute).toFixed(0)} w/min</td>
        </tr>
    }) : (<tr>
        <td style={{ columnSpan: 4 }}> Veri Bulunamadı</td>
    </tr>)
    return (
        <div className={`card ${theme.card}`}>
            <div className="card-header">
                <h4 className="card-title text-center">Sonuçlarım</h4>
            </div>
            <div className="card-body p-1">
                <table className={`table table-hover ${theme.table}`}>
                    <thead>
                        <tr>
                            <th>TextId</th>
                            <th>Accuracy</th>
                            <th>Time</th>
                            <th>WPM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultRows}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Results;