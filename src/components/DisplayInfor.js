import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';


// class DisplayInfor extends React.Component {
//     render() {
//         console.log(">> Call me render")
//         const { listUsers } = this.props;// object
//         // console.log(listUsers);
//         //props => viết tắt property

//         return (
//             <div className="display-infro-container">
//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {

//                             return (
//                                 //dieu kien
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name's {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                 </div>

//                             )

//                         })}
//                     </>
//                 }
//             </div>


//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;// object

    return (
        <div className="display-infro-container">
            {true &&
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