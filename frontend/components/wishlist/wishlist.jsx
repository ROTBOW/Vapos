import React from 'react';



class Wishlist extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        if (!!this.props.currentUser) {
            this.props.fetchRelations(this.props.currentUser.id)
        }
    }

    empty(pojo) {
        let count = 0;
        for (let i in pojo) {count++}
        return count != 0
    }

    render(){
        if (!!this.props.currentUser && this.empty(this.props.wishlist)) {

            let user = this.props.currentUser;
            let wishlist = this.props.wishlist;

            let gameList = [];
            for (let id in wishlist) {
                let game = wishlist[id];
                console.log(game);

                gameList.push(<li>
                    <img src={game.images[0]} />
                </li>)
                
            }


            return (
                <div id="wishlist">
                    <h1>{user.username}</h1>
                    {gameList}
                </div>
            )
        } else {
            return <div>crap</div>
        }
    }
}

export default Wishlist;