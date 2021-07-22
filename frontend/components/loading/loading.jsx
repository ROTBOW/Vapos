import React from 'react';
import { GiConsoleController } from "react-icons/gi";

class Loading extends React.Component {
    render(){
        return (
            <div className="loading">Loading...<GiConsoleController/></div>
        )
    }
}

export default Loading;