import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});


export function UserContextProvider(props) {
    const [user,setUser] = useState(null);
    const [ready, setReady] = useState(false);


    useEffect(() => {
        if (!user){
            axios.get('/user/profile').then(({data}) => {
                setUser(data);
                console.log('useEffect running')
                setReady(true);
            })
        }
    },[user])

    return (
        <UserContext.Provider value={{user,setUser,ready}}>
            {props.children}
        </UserContext.Provider>
    )
} 

