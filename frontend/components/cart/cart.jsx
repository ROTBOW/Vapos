import React from 'react';
import StoreBar from '../games/store_bar';
import { Link } from 'react-router-dom';



class Cart extends React.Component {

    constructor(props){
        super(props)

        this.totalCost = this.totalCost.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount(){
        this.props.fetchCartItems(this.props.currentUser.id);
    }

    empty(pojo){
        let count = 0;
        for (let i in pojo) count++
        return count === 0
    }

    totalCost() {
        let items = this.props.cartItems;
        let cost = 0;
        for (let item in items) {
            cost += items[item].cost
        }
        return cost
    }

    handleRemove(itemId) {
        return e => {
            this.props.removeCart(itemId)
        }
    }

    render(){
        if (!!this.props.currentUser && this.empty(this.cartItems)){
            let cartItems = this.props.cartItems;

            let items = [];
            for (let id in cartItems) {
                let game = cartItems[id];
                items.push(
                    <li key={id}>
                        <div>
                            <Link to={`/games/${game.id}`}><img src={game.images[0]} width="120" height="45" /></Link>
                            <h2><Link to={`/games/${game.id}`}>{game.title}</Link></h2>
                        </div>

                        <p>${game.cost}<br/><button onClick={this.handleRemove(game.relation_id)}>Remove</button></p>
                    </li>
                    )
            }

            return (
                <div className="cart-container">
                    <StoreBar classToAdd="store-bar-cart"/>
                    <div className="cart">
                        <h1>YOUR SHOPPING CART</h1>

                        <ul>
                            {items}
                        </ul>

                        <div>
                            <p>Estimated Total</p>
                            <p>${this.totalCost()}</p>
                        </div>
                        <section>
                            <button>Purchase for myself</button>
                            <button>Purchase as a gift</button>
                        </section>
                    </div>
                </div>
            )
            
        } else {
            return (<div>Not Good</div>)
        }
    }
}

export default Cart;