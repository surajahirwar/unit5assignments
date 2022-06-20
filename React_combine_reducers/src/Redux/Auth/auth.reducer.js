import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SUCCESS } from "./auth.types";

let token = localStorage.getItem("token");

const inital = {
    loading:false,
    error:false,
    isAuth:!!token,
    token: token,
}

export const authReducer = (state=inital, {type, payload})=> {
    switch (type) {
        case AUTH_LOADING:{
            return { ...state, loading:true, error:false};
        }
        case AUTH_SUCCESS:{
            localStorage.setItem("token", payload.token)
            return { ...state,
                 loading:false,
                  error:false, 
                  isAuth:true,
                  token:payload.token,
                };
        }
        case AUTH_ERROR:{
            return { ...state,
                 loading:false,
                  error:true,
                  isAuth:false,  
                };
        }
        case AUTH_LOGOUT:{
            localStorage.removeItem("token")
            return { ...state,
                    isAuth:false,

            }
        }
        default:{
            return state;
        }
            
    }
}
