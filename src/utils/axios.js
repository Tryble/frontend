import axios from 'axios';
import store from '../store';


axios.defaults.baseURL = 'https://tracq-backend.herokuapp.com/api/v1';

export default function withAuth() {
    const token = store.getState().auth.token;
    const instance = axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `${token}` : null
        }
    })

    return instance;
}