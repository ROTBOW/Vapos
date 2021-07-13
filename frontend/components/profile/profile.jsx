import React from "react";
import { Link } from "react-router-dom";
import { BsPersonFill, BsTrophy } from "react-icons/bs";

const isEmpty = (pojo, returnCount=false) => {
    let count = 0;
    for (let id in pojo) count++;
    return (returnCount) ? count : !(count > 0);
    // return !(count > 0);
}

class Profile extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // grabs info about owned games
        this.props.fetchUser(this.props.currentUser.id)
        this.props.fetchRelations(this.props.currentUser.id)
    }

    render(){
        if (!isEmpty(this.props.userInfo) && !isEmpty(this.props.ownedGames) ) {
            let userInfo = this.props.userInfo[this.props.currentUser.id];
            let ownedGames = this.props.ownedGames;
            
            console.log(isEmpty(ownedGames, true));

            return (
                <div className="background-shape" >

                    <div id="profile-page">

                        <div className="profile-header">
                            {/* <img src="https://plchldr.co/i/165x165"></img> */}
                            <div>
                                <BsPersonFill className="profile-icon"/>
                                <div>
                                    <h2>{this.props.currentUser.username}</h2>
                                    <article> {userInfo.desc} </article>
                                </div>
                            </div>

                            <aside>
                                <h2>LEVEL <div className="circle"><p>0</p></div></h2>
                                <div> <BsTrophy/> Use Vapos<br/>150 XP</div>
                                <div>Has {isEmpty(ownedGames, true)} Game in Library</div>
                                {/* <Link to="#">Edit Profile</Link> */}
                            </aside>

                        </div>

                        {/* <div>this is also an item that goes below the profile header</div> */}

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