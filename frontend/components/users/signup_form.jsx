import React from 'react';
import AlertListContainer from '../errors/alert_list_container';





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

    componentWillUnmount(){
        this.props.resetErrors()
    }

    update(key) {
        return e => this.setState({ [key]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state);
        // if (store.getState()['errors']['session']) {
        //     console.log('')
        // }

        // let tempState = {
        //     username: this.state.username,
        //     password: this.state.password
        // }
        // this.props.sendLogin(tempState);
        if (this.props.currentUser) {
            this.props.history.replace('/login')
        }
    }


    render(){
        // console.log(this.props.errors)
        let errors;
        if (this.props.errors.length > 0) {
            errors = <AlertListContainer/>
        }
        return (
            <div>
                {errors}
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