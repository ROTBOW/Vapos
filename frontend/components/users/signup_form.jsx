import React from 'react';
import AlertContainer from '../errors/alert_container';





class SignUpForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            showErrors: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount(){
        this.props.resetErrors()
    }

    update(key) {
        return e => this.setState({ [key]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        let newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        this.props.createUser(newUser)
            .then(() => {
                this.props.sendLogin(newUser)
            });

        if (this.props.currentUser) {
            this.props.history.replace('/login')
        }
    }


    render(){
        
        let alerts;
        if (this.props.errors.length > 0) {
            alerts = this.props.errors.map((error, idx) => {
                let timeout;
                (idx === 0) ? timeout = 3000 : timeout = 3000 + (idx * 1000)
                return (
                    <AlertContainer
                        message={error}
                        key={idx}
                        idx={idx}
                        timeout={timeout}
                    />
                )
            })
        }

        return (
            <div>
                <div className='alerts-container'>
                    {alerts}
                </div>
                <h1 id="signup-form-title">CREATE YOUR ACCOUNT</h1>
                <form onSubmit={this.handleSubmit} id="signup-form">

                    <label>Email Address
                        <input
                        type="text"
                        placeholder="14 when you made it"
                        onChange={this.update('email')}
                        />
                    </label>

                    <label>Username
                        <input
                        type="text"
                        placeholder="Don't make it criggy now"
                        onChange={this.update('username')}
                        />
                    </label>

                    <label>Password
                        <input
                        type="password"
                        placeholder="Just don't put password"
                        onChange={this.update('password')}
                        />
                    </label>

                    <button type='submit'>Sign Up</button>

                </form>
            </div>
        )
    }
}

export default SignUpForm;