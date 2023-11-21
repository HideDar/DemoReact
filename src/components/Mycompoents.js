// class compoent
// function compoent

import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyCompoents extends React.Component {


    //JSX
    render() {
        const myInfor = ['ab', 'cd']
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor name="Nguyen Hoang" age="21" ></DisplayInfor>
                <hr></hr>
                <DisplayInfor name="Hoang" age={21} myInfor={myInfor} ></DisplayInfor>
            </div>
        );
    }

}


// Class compoents phai ke thua (extend ) Compoent cua React

export default MyCompoents;