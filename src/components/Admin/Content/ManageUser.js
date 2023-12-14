import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../Services/apiServices";

const ManageUser = (props) => {

    const [showModalCreateUser, setshowModalCreateUser] = useState(false);

    const [listUsers, setListUsers] = useState([

    ])

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUser()

        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }


    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">

                    <button className="btn btn-primary " onClick={() => setshowModalCreateUser(true)}><FcPlus className="icon-addUser" />Add New User</button>
                </div>
                <div className="table-users-container">
                    <TableUser listUsers={listUsers} />

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setshowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
            </div>

        </div>
    )
}

export default ManageUser;