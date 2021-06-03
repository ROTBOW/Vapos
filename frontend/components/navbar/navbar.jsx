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
            <Link to='/login' key='1' ><button>Login</button></Link>,
            <Link to='/user/new' key='2 '><button>Sign Up</button></Link>
            ]
        } else {
            buttons = <button onClick={this.props.sendLogout} >Log Out</button>;
        }
        

        return (
            <div className='navbar'>
                
                <Link to='/'><img src={window.vaposLogo} alt='Vapos logo'/></Link>

                <ul >

            
                </ul>

                <div>
                    {buttons}
                </div>

            </div>
        )
    }
}

export default NavBar;