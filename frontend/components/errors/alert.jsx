import React from 'react';


class Alert extends React.Component {


  componentDidMount() {
      // this.timer = setTimeout(
      //     this.closeMe(this.props.idx),
      //     this.props.timeout
      // );
    }
    
    componentWillUnmount() {
      // clearTimeout(this.timer);
    }

    closeMe(errorId){
      return e => this.props.removeError(errorId)
    }


    render(){
        return(
            <div className="alert alert-warning" role="alert">
                {this.props.message}
                <button onClick={this.closeMe(this.props.idx)}>X</button>
            </div>
        )
    }

}

export default Alert;