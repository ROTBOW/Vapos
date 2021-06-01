import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {



    render(){
        return (
            <ul className='navbar'>
                {/* <li> 
                    <button onClick={() => this.props.history.replace('/login')}>Login</button>
                     <button onClick={() => this.props.history.replace('/user/new')}>Sign Up</button>
                </li> */}
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        )
    }
}

export default NavBar;