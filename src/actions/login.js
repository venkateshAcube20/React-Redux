import * as types from '../constants/login.js'

export const loginUserRequest = ()=>{
    return { 
        type: types.LOGIN_REQUEST
    }
}

export const loginUserSuccess = (user)=>{
    return {
        type: types.LOGIN_SUCCESS,
        payload: user
    }
}

export const loginUserFailure = (err)=>{
    return {
        type: types.LOGIN_FAILURE,
        payload: err
    }
}

export const loginUser =(userName, password)=>{
    return async function(dispatch){
        console.log(userName, password)
     try{
            dispatch(loginUserRequest())
            dispatch(loginUserSuccess(userName))        
     }       
       catch(err){
                console.log("------err----------", err.message);
                dispatch(loginUserFailure(err.message))                
        }
    }
}

