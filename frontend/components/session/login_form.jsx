import React from 'react';

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

    demoLogin(e){
        e.preventDefault();
        this.props.sendLogin(this.demoUser)
        this.props.history.replace('/')
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.sendLogin(this.state)
        this.props.history.replace('/')
        
    }

    update(key){
        return e => this.setState({ [key]: e.currentTarget.value })
    }

    render(){
        return (
            <div className='login-form'>
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