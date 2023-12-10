import React, { useEffect, useInsertionEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';



const DisplayInfor = (props) => {
    const { listUsers } = props;// object
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    useEffect(
        () => {
            setTimeout(() => {
                document.title = "Nguyen Hoang"
            }, 3000)
            console.log("call me effect")
        }, [listUsers]

    )

    return (
        <div className="display-infro-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide List Users" : "Show List Users"}
                </span>
            </div>

            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {

                        return (
                            //dieu kien
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                            </div>

                        )

                    })}
                </>
            }
        </div>


    )
}


export default DisplayInfor;