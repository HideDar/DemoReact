import React from "react";

class DisplayInfor extends React.Component {



    render() {
        const { listUsers } = this.props;// object
        console.log(listUsers);
        //props => viết tắt property
        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                        </div>
                    )
                })}


                {/* <div>My name's {this.props.name}</div>
                <div>My age's {this.props.age}</div> */}
            </div>
        )
    }
}


export default DisplayInfor;