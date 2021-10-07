import React from 'react';

class Login extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {name: ""};
    }

    onSubmit = (event) => {
        event.preventDefault();
        
        let name = this.state.name;

        this.props.history.push({
            pathname: '/home',
            state: {name: name}
        })
    }

    onChangeName = (event) => {
        this.setState( { name: event.target.value } )
    }

    render () 
    {
        return (
            <div className="center Login" >
                <h1> Welcome! </h1>
                <h3> How can we call you? </h3>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="Your name here" type="text" value={this.state.email} onChange={this.onChangeName} /> <br/> <br/> 
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Login;