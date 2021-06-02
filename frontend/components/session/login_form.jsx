import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                username: '',
                password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.sendLogin(this.state)
        
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
            </div>
        )
    }
}

export default LoginForm;