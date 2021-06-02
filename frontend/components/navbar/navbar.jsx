import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {



    render(){
        return (
            <div className='navbar'>
                <ul >

            
                </ul>

                <div>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/user/new'><button>Sign Up</button></Link>
                    <button onClick={this.props.sendLogout} >Log Out</button>
                </div>

            </div>
        )
    }
}

export default NavBar;