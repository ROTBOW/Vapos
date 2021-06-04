import React from 'react';
import AlertContainer from '../errors/alert_container';

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
            <div className='login-form'>
                {alerts}
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input
                        type='text'
                        onChange={this.update('username')}
                        />
                    </label>

                    <label>Password:
                        <input
                        type='password'
                        onChange={this.update('password')}
                        />
                    </label>

                    <button type='submit'>Login</button>
                </form>

                <button onClick={this.demoLogin.bind(this)}>Demo User Login</button>
            </div>
        )
    }
}

export default LoginForm;