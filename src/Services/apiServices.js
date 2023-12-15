import axios from "../utils/axiosCustomize";
// import axios from "axios";


const postCreateNewUser = (email, password, username, role, imgae) => {
    //Call APIS
    const data = new FormData();
    data.append('email', email)
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', imgae);
    return axios.post('api/v1/participant', data);
}


const getAllUser = () => {
    return axios.get('api/v1/participant/all');
}

const putUpdateUser = (id, username, role, imgae) => {
    //Call APIS
    const data = new FormData();

    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', imgae);
    return axios.put('api/v1/participant', data);
}

export { postCreateNewUser, getAllUser, putUpdateUser }
