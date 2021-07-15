import React from "react";
import { isEmpty } from './../profile/profile';

class Library extends React.Component {
    constructor(props) {
        super (props);
    }

    componentDidMount() {
        this.props.fetchRelations(this.props.currentUser.id);
    }


    render(){
        if (isEmpty(this.props.ownedGames)) {
            return (
                <div>here we are has no games</div>
                )
        } else {
            console.log(this.props.ownedGames);
            return (
                <div>here we are</div>
            )
        }
    }
}

export default Library;