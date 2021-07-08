import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            storeDropdown: false,
            aboutDropdown: false
        }

        this.profileLink = this.profileLink.bind(this)
    }

    componentDidMount(){
        let tempState = store.getState()
        let tempUser = tempState['sessionUser']
        this.setState({ login: !tempUser })
    }

    profileLink() {
        if (this.props.currentUser) {
            return (
                <li><Link to="/profile">{this.props.currentUser.username.toUpperCase()}</Link></li>
            )
        }
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
                    <li className="disabled">FEATURED</li>
                    <li className="disabled">DISCOVERY QUEUE</li>
                    <li><Link to="/wishlist">WISHLIST</Link></li>
                    <li className="disabled">POINT SHOP</li>
                    <li className="disabled">NEWS</li>
                    <li className="disabled">STATS</li>
            </ul>
        } else {
            storeDrop = <></>
        }

        let aboutDrop;
        if (this.state.aboutDropdown) {
            aboutDrop = <ul className="dropdown-menu">
                <li><a href="https://github.com/ROTBOW/Vapos">GITHUB</a></li>
                <li><a href="https://www.linkedin.com/in/josiah-leon/">LINKEDIN(Thats me!)</a></li>
            </ul>
        }
        

        return (
            <div className='navbar'>
                
                <div id="navbar-left-wing">
                    <Link to='/'><img src={window.vaposLogo} alt='Vapos logo'/></Link>

                    <ul>

                        <li
                            onMouseEnter={e => this.setState({storeDropdown: true})}
                            onMouseLeave={e => this.setState({storeDropdown: false})}
                        ><Link to='/'>STORE</Link>{storeDrop}</li>

                        <li className="disabled">COMMUNITY</li>
                        <li
                            onMouseEnter={e => this.setState({aboutDropdown: true})}
                            onMouseLeave={e => this.setState({aboutDropdown: false})}
                        >ABOUT{aboutDrop}</li>
                        <li className="disabled">SUPPORT</li>
                        {
                            this.profileLink()
                        }
                
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