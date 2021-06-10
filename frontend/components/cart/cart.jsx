import React from 'react';



class Cart extends React.Component {

    componentDidMount(){
        this.props.fetchCartItems(this.props.currentUser.id);
    }

    render(){
        return (
            <div>
                crap
            </div>
        )
    }
}

export default Cart;