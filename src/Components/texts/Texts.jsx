import React from 'react'
import AddTexts from './AddTexts';
import TextList from './TextList';

class Texts extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AddTexts />
                <hr />
                <TextList/>
            </React.Fragment>
        );
    }
}

export default Texts;