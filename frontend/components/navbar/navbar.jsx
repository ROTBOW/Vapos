import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    componentDidMount(){
        let tempState = store.getState()
        let tempUser = tempState['sessionUser']
        this.setState({ login: !tempUser })
    }


    render(){
        let buttons;
        
        if (!this.props.currentUser) {
            buttons = [
            <Link to='/login' key='1' id="login-link">login</Link>
            ]
        } else {
            buttons = <button onClick={this.props.sendLogout} >Log Out</button>;
        }
        

        return (
            <div className='navbar'>
                
                <div>
                    <Link to='/'><img src={window.vaposLogo} alt='Vapos logo'/></Link>

                    <ul>

                        <li><Link to='/'>STORE</Link></li>
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