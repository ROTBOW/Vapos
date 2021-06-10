import React from 'react';
import { Link } from 'react-router-dom';



class Wishlist extends React.Component {

    constructor(props){
        super(props)

        this.handleBuyButton = this.handleBuyButton.bind(this);
        this.handleRemoveButton = this.handleRemoveButton.bind(this);
    }

    componentDidMount(){
        if (!!this.props.currentUser) {
            this.props.fetchRelations(this.props.currentUser.id)
        }
    }
    
    handleBuyButton(e){
        e.preventDefault();
        if (!!this.props.currentUser) {
            console.log('this doesn\'t do anything yet but it will');
        } else {
            this.props.history.replace('/login');
        }
    }

    handleRemoveButton(relationId) {
        return e => {
            this.props.removeRelation(relationId)
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
                let date = /\d+-\d+-\d{2}/.exec(game.created_at)[0].replaceAll('-', '/')

                gameList.push(
                <li key={game.id}>
                    <div>
                        <Link to={`/games/${game.id}`}>{game.title}</Link>
                        <Link to={`/games/${game.id}`}><img src={game.images[0]} width="292" height="136"/></Link>
                    </div>

                    <article>
                        <button onClick={this.handleBuyButton} >Add to cart</button>
                        <p>Added on {date}(<button onClick={this.handleRemoveButton(game.relation_id)}>remove</button>)</p>
                    </article>

                </li>
                )
                
            }


            return (
                <div id="wishlist">
                    <h1>{user.username.toUpperCase()}'S WISHLIST</h1>
                    {gameList}
                </div>
            )
        } else {
            return <div>crap</div>
        }
    }
}

export default Wishlist;