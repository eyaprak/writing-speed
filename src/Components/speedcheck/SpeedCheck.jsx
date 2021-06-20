import React from 'react'
import Info from './Info'
import TextInput from './TextInput'
import Score from './Score'
const initState = {
    result: null
}

class SpeedCheck extends React.Component {

    challenge = "Hello React";
    state = initState

    setResult = (result) => {
        this.setState({
            result
        })
    }

    resetResult = () => {
        this.setState({
            result: null
        })
    }
    render() {
        const {result} = this.state
        return (
            <React.Fragment>
                <Info />
                <hr />
                <TextInput challenge={this.challenge} setResult={this.setResult} resetResult={this.resetResult} />
                <hr />
                {result !== null ? <Score values={this.state.result} /> : ""}
            </React.Fragment >
        );
    }
}

export default SpeedCheck;