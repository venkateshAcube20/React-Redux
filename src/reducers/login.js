import * as types from "../constants/login.js"

const initialState ={
    loading: false,
    users:[],
    err:''
}

const getLoginReducer = (state=initialState, action)=>{
   
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                loading:true
            }
        
        case types.LOGIN_SUCCESS:
            return {
                loading:false,
                users:action.payload,
                err:''
            }
        case types.LOGIN_FAILURE:
            return {
                loading: false,
                users:[],
                err:action.payload
            }
        default:
            return state;
    }
}

export default getLoginReducer;