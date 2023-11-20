// class compoent
// function compoent

import React from "react";

class MyCompoents extends React.Component {

    state = {
        name: 'Hoang',
        address: 'Thai binh',
        age: '21',
    };

    handleClick = (event) => {
        console.log(">>Click me my button");
        console.log("Random", Math.floor((Math.random() * 100) + 1));

        this.setState({
            name: 'Nguyen Hoang',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnMoverOver(event) {
        // console.log(event);
    }


    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick() }}>Click me</button>
            </div>
        );
    }

}


// Class compoents phai ke thua (extend ) Compoent cua React

export default MyCompoents;