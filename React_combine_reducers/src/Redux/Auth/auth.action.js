import axios from "axios";
import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SUCCESS } from "./auth.types";


export const loginApi = (data) => (dispatch) => {
    dispatch({ type: AUTH_LOADING });
        axios
          .post("https://reqres.in/api/login", {
            email: data.email,
            password: data.password,
          })
          .then((r) => {
            dispatch({ type: AUTH_SUCCESS, payload: r.data });
          })
          .catch(() => {
            dispatch({ type: AUTH_ERROR });
          });
      
    
};

export const  logoutApi =()=> ({type:AUTH_LOGOUT})