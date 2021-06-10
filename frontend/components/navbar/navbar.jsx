import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            storeDropdown: false
        }
    }

    componentDidMount(){
        let tempState = store.getState()
        let tempUser = tempState['sessionUser']
        this.setState({ login: !tempUser })
    }


    render(){
        let buttons;
        
        if (!this.props.currentUser) {
            buttons = <div className='login-div'><Link to='/login' id="login-link">login</Link></div>
        } else {
            buttons = (
                <div className='logOut-div'>
                    <button onClick={this.props.sendLogout} key='1'>Log Out</button>
                    <Link to="/cart">Your Cart</Link>
                </div>
            );
        }

        let storeDrop;
        if (this.state.storeDropdown) {
            storeDrop = <ul className="dropdown-menu">
                    <li>FEATURED</li>
                    <li>DISCOVERY QUEUE</li>
                    <li><Link to="/wishlist">WISHLIST</Link></li>
                    <li>POINT SHOP</li>
                    <li>NEWS</li>
                    <li>STATS</li>
            </ul>
        } else {
            storeDrop = <></>
        }
        

        return (
            <div className='navbar'>
                
                <div>
                    <Link to='/'><img src={window.vaposLogo} alt='Vapos logo'/></Link>

                    <ul>

                        <li
                            onMouseEnter={e => this.setState({storeDropdown: true})}
                            onMouseLeave={e => this.setState({storeDropdown: false})}
                        ><Link to='/'>STORE</Link>{storeDrop}</li>

                        <li>COMMUNITY</li>
                        <li>ABOUT</li>
                        <li>SUPPORT</li>
                
                    </ul>
                </div>

                <div className='login-div'>
                    {buttons}
                </div>

            </div>
        )
    }
}

export default NavBar;