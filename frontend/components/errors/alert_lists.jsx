import React from 'react';
import Alert from './alert';
import { CSSTransitionGroup } from 'react-transition-group'


class AlertList extends React.Component {

    constructor(props){
        super(props)
        let tempMessages
        (typeof this.props.errors === 'string') ? tempMessages = this.props.errors[0] : tempMessages = this.props.errors[0]
        this.state = {
            messages: tempMessages
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

    // componentDidUpdate() {
    //     if (this.state) {

    //     }
    // }

    render(){
        console.log(this.state.messages)

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