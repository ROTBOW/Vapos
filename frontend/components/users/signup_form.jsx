import React from 'react';




class SignUpForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(key) {
        return e => this.setState({ [key]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state);
        let tempState = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.sendLogin(tempState);
        this.props.history.replace('/');
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>Username:
                        <input
                        type="text"
                        placeholder="Don't make it criggy now"
                        onChange={this.update('username')}
                        />
                    </label>

                    <label>Email:
                        <input
                        type="text"
                        placeholder="14 when you made it"
                        onChange={this.update('email')}
                        />
                    </label>

                    <label>Password:
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