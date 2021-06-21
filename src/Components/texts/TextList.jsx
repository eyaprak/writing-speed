import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext'
import { TextInputContext } from '../../Contexts/TextInputContext';

const TextList = () => {
    const theme = useContext(ThemeContext).getTheme()
    const { texts } = useContext(TextInputContext)
    const textRows = texts.map((t, i) => {
        return <tr key={i}>
            <td>{t.id}</td>
            <td>{t.text}</td>
            <td>{t.difficulty}</td>

        </tr>
    })
    return (
        <div className={`card ${theme.card} border`}>
            <div className="card-header text-center">
                <h4 className="card-title">Metinler</h4>
            </div>
            <div className="card-body p-1">
                <table className={`table ${theme.table} table-striped table-hover m-0`}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Metin</th>
                            <th>Zorluk</th>
                        </tr>
                    </thead>
                    <tbody>
                        {textRows}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TextList;