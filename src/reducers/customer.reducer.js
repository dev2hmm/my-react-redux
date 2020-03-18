import { CustomerConstant } from '../constants/customer.constant'

const instialState = {
    loading: false,
    customers: []
};

export default function customer(state = instialState, action) {
    switch (action.type) {
        case CustomerConstant.GET_CUSTOMER_FAIL:
            return {
                ...state,
                loading: true
            }
        case CustomerConstant.GET_CUSTOMER_SUCCESS:
            return {
                ...state,
                customers: action.payload
            }
        case CustomerConstant.GET_CUSTOMER_FAIL:
            return {
                ...state,
                customers: []
            }
        default:
            return state


    }
}