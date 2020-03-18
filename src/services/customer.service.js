import axios from 'axios'
import { GET_ALL_CUSTOMER } from '../config'

async function getAllCustomer() {
    return axios({
        method: 'GET',
        url: GET_ALL_CUSTOMER,
    }).then(data => data.data);
}
export const customerService = {
    getAllCustomer
}