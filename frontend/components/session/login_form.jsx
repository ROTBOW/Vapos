import React from 'react';
import AlertList from '../errors/alert_lists';

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
        let errors;
        if (this.props.errors.length > 0) {
            errors = <AlertList messages={this.props.errors}/>
        }
        return (
            <div className='login-form'>
                {errors}
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