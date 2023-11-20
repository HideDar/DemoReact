// class compoent
// function compoent

import React from "react";

class MyCompoents extends React.Component {

    state = {
        name: 'Hoang',
        address: 'Thai binh',
        age: '21',
    };

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }

}


// Class compoents phai ke thua (extend ) Compoent cua React

export default MyCompoents;