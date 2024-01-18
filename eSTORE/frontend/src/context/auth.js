import { useState,useContext,useEffect ,createContext } from "react";
import axios from "axios";




const AuthContext = createContext();


const AuthProvider =({children})=>{
    const [auth, setAuth] =useState({
        user:null,
        token:"",
    });

//default axios setting
axios.defaults.headers.common["Authorization"]=auth?.token;



    useEffect(()=>{
        const data=localStorage.getItem("auth");
        if(data){
            const parseData= JSON.parse(data);
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token
            });
        }

    },[])

    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    );

};


//create custom hook

const useAuth =() => useContext(AuthContext);

export {useAuth, AuthProvider};