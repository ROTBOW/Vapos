import React from 'react';


class Alert extends React.Component {

    // gonna add a componetdidmount that if the current idx is 0 then it will start a countdown to remove itself.

    componentDidMount() {
        this.timer = setTimeout(
            this.props.closeMe(this.props.message),
          3000
        );
      }
      
      componentWillUnmount() {
        clearTimeout(this.timer);
      }


    render(){
        return(
            <div className="alert alert-warning" role="alert">
                {this.props.message}
                <button onClick={this.props.closeMe(this.props.message)}>X</button>
            </div>
        )
    }

}

export default Alert;