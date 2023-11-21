// class compoent
// function compoent

import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyCompoents extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Nguyen Hoang 1", age: "21" },
            { id: 2, name: "Nguyen Hoang 2", age: "22" },
            { id: 3, name: "Nguyen Hoang 3", age: "23" },

        ]
    }
    //JSX
    render() {

        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }

}


// Class compoents phai ke thua (extend ) Compoent cua React

export default MyCompoents;