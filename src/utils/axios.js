import axios from 'axios';
import store from '../store';


axios.defaults.baseURL = 'https://tryble.herokuapp.com/api';

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