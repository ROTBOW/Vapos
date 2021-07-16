import React from "react";
import { Link } from "react-router-dom";
import { BsPersonFill, BsTrophy } from "react-icons/bs";

export const isEmpty = (pojo, returnCount=false) => {
    let count = 0;
    for (let id in pojo) count++;
    return (returnCount) ? count : !(count > 0);
}

class Profile extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // grabs info about owned games
        this.props.fetchUser(this.props.match.params.id)
        this.props.fetchRelations(this.props.match.params.id)
    }

    render(){
        if (!isEmpty(this.props.userInfo) && !isEmpty(this.props.ownedGames) ) {
            let userInfo = this.props.userInfo[this.props.match.params.id];
            let ownedGames = this.props.ownedGames;

            return (
                <div className="background-shape" >

                    <div id="profile-page">

                        <div className="profile-header">
                            <div>
                                <BsPersonFill className="profile-icon"/>
                                <div>
                                    <h2>{userInfo.username}</h2>
                                    <article> {userInfo.desc} </article>
                                </div>
                            </div>

                            <aside>
                                <h2>LEVEL <div className="circle"><p>0</p></div></h2>
                                <div> <BsTrophy/> Use Vapos<br/>150 XP</div>
                                <div>Has {isEmpty(ownedGames, true)} Game(s) in Library</div>
                                {/* <Link to="#">Edit Profile</Link> */}
                            </aside>

                        </div>

                        {/* <div>this is also an item that goes below the profile header</div> */}

                    </div>

                </div>
            )

        } else {
            return (
                <div>well isn't this something?</div>
            )
        }
    }

}


export default Profile;