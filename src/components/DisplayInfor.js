import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';


class DisplayInfor extends React.Component {
    constructor(props) {
        console.log('>>> Call constructor: 1')
        super(props);
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('>>> Call me component did mount')
        setTimeout(() => {
            document.title = 'Nguyen Van Hoang'
        }, 3000);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> Call me component did update', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('You got 5 users')
            }
        }
    }


    handleShowHide = () => {
        this.setState(
            {
                isShowListUser: !this.state.isShowListUser
            }
        )
    }

    render() {
        console.log(">> Call me render")
        const { listUsers } = this.props;// object
        // console.log(listUsers);
        //props => viết tắt property

        return (
            <div className="display-infro-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list users" : "Show list users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
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
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>

                            )

                        })}
                    </>
                }
            </div>


        )
    }
}


export default DisplayInfor;