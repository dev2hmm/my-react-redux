import { customerService } from '../services/customer.service'
import { CustomerConstant } from '../constants/customer.constant'

function getAllCustomer() {
    function loading(payload) {
        return {
            type: CustomerConstant.GET_CUSTOMER_LOADING,
            payload: payload
        };
    }

    function success(payload) {
        return {
            type: CustomerConstant.GET_CUSTOMER_SUCCESS,
            payload: payload
        };

    }

    function fail(payload) {
        return {
            type: CustomerConstant.GET_CUSTOMER_FAIL,
            payload: payload
        }
    }
    return (dispatch) => {
        dispatch(loading(true));
        customerService.getAllCustomer()
            .then((payload) => {
                    dispatch(success(payload.data));
                },
                error => dispatch(fail(error))
            );
    }
}
export const customerActions = {
    getAllCustomer
}