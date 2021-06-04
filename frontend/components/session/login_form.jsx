import React from 'react';
import AlertContainer from '../errors/alert_container';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                username: '',
                password: '',
        }
        this.demoUser = {
            username: 'demo',
            password: 'demoboi55',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount(){
        this.props.resetErrors()
    }

    demoLogin(e){
        e.preventDefault();
        this.props.sendLogin(this.demoUser)
        this.props.history.replace('/')
        if (this.props.currentUser) {
            this.props.history.replace('/')
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.sendLogin(this.state)
        if (this.props.currentUser) {
            this.props.history.replace('/')
        }
    }

    update(key){
        return e => this.setState({ [key]: e.currentTarget.value })
    }

    render(){

        let alerts;
        if (this.props.errors.length > 0) {
            alerts = this.props.errors.map((error, idx) => {
                return (
                    <AlertContainer
                        message={error}
                        key={idx}
                        idx={idx}
                    />
                )
            })
        }
        return (
            <div id="login-component">
                {alerts}
                <div id="login-left-side">
                    <h2>SIGN IN</h2>
                    <form onSubmit={this.handleSubmit} className='login-form'>
                        <label>Vapos account name
                            <input
                            type='text'
                            onChange={this.update('username')}
                            />
                        </label>

                        <label>Password
                            <input
                            type='password'
                            onChange={this.update('password')}
                            />
                        </label>

                        <button type='submit'>Sign In</button>
                    </form>
                    <button onClick={this.demoLogin.bind(this)} id="demo-user-login">Demo User Login</button>
                </div>

                <div id="login-right-side">
                    <Link to='/user/new' key='1'><button>Sign Up</button></Link>
                </div>
            </div>
        )
    }
}

export default LoginForm;