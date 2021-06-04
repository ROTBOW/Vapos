import React from 'react';
import Alert from './alert';


class AlertList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            messages: this.props.errors
        }

        this.handleChildUnmount = this.handleChildUnmount.bind(this)
    }

    handleChildUnmount(target) {
        return e => {
            // let copyState = this.state;
            // delete copyState['messages'][target]
            let copyState = { messages: [] };

            this.state.messages.forEach(text => {
                if (text != target) {
                    copyState["messages"].push(text);
                }
            })
            
            this.setState(copyState)
        }
            
    }

    render(){

        let alerts;
        if (typeof this.state.messages != 'string') {
            alerts = this.state.messages.map((error, idx) => {
                return (
                    <Alert
                        message={error}
                        key={idx}
                        idx={idx}
                        closeMe={this.handleChildUnmount}
                    />
                )
            })
        }

        return (
            <div>
                <h1>do I go away?</h1>
                {alerts}
            </div>
        )
    }

}


export default AlertList;