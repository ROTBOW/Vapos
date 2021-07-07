import React from "react";


class Profile extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // grabs info about owned games
    }


    render(){

        if (this.props.games === undefined) {
            return (
                <div className="background-shape" >

                    <div id="profile-page">

                        <div className="profile-header">
                            <img src="https://plchldr.co/i/165x165"></img>
                            <div>
                                <h2>{this.props.currentUser.username}</h2>
                                <article> this will be an desc area, idk how I'll fill it </article>
                            </div>

                            <aside>
                                
                            </aside>

                        </div>

                        <div>this is also crap</div>

                    </div>

                </div>
            )

        } else {
            return (
                <div>well isn't this something? 2</div>
            )
        }
    }

}


export default Profile;