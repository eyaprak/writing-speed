import React from 'react';
import { TextInputContext } from '../../Contexts/TextInputContext';
import { ThemeContext } from '../../Contexts/ThemeContext';

function Info(props) {
    return (
        <TextInputContext.Consumer>{(textContext) => (
            <ThemeContext.Consumer>{(context) => {
                const theme = context.getTheme();
                const texts = textContext.texts.find(t => t.id === textContext.selected).text
                return (
                    <div className={`card text-center border ${theme.card}`}>
                        <div className="card-header">
                            <h3>Yazma Hızı Testi</h3>
                        </div>
                        <div className="card-body">
                            <p>Alttaki metni kutucuğa girmeye başladığınızda süreniz başlayacaktır.</p>
                            <p>Testi bitirmek için <span className="badge bg-primary">'ctrl + Enter'</span> kombinasyonunu kullanınız.</p>
                            <p>Testi sıfırlamak için <span className="badge bg-danger">'ctrl + B'</span> kombinasyonunu kullanınız.</p>
                            <p>Ayrıca karakter sınırını aştığınızda test otomatik olarak sonlanacaktır.</p>
                        </div>
                        <div className="card-footer">
                            <span style={{ color: '#dc3545', fontWeight: 'bold' }}>Yazılacak Metin: </span>{texts}
                        </div>
                    </div>
                );
            }}
            </ThemeContext.Consumer>
        )
        }

        </TextInputContext.Consumer >
    );
}

export default Info;