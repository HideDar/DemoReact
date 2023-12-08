// class compoent
// function compoent

import React from "react";
import AddUserInfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";

class MyCompoents extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Nguyen Hoang 1", age: "16" },
            { id: 2, name: "Nguyen Hoang 2", age: "22" },
            { id: 3, name: "Nguyen Hoang 3", age: "69" },

        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState(
            {
                listUsers: listUsersClone
            }
        )
    }
    //JSX
    render() {

        return (
            <>
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}>

                    </AddUserInfor>
                    <br></br>
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}

                    />
                </div>
                <div className="b">

                </div>
            </>
        );
    }

}


// Class compoents phai ke thua (extend ) Compoent cua React

export default MyCompoents;