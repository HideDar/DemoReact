import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Hoang',
        address: 'Thai binh',
        age: '21',
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {

        //bad code
        //this.state.age = event.target.value

        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your Name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />

                    <label>Your Age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;