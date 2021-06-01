import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                email: '',
                password: '',
            }
        }

        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    render(){
        return (
            <div className='login-form'>
                <form onSubmit={null}>
                    <label>Username:
                        <input
                        type='text'
                        />
                    </label>

                    <label>Password:
                        <input
                        type='password'
                        />
                    </label>

                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;