import React from 'react';

class Alert extends React.Component {



    render(){
        console.log(this.props.messages)
        return(
            <div class="alert alert-warning" role="alert">
                This is a warning alert—check it out!
            </div>
        )
    }

}

export default Alert;