import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});


export function UserContextProvider(props) {
    const [user,setUser] = useState(null);
    const [ready, setReady] = useState(false);


    useEffect(() => {
        if (!user){
            axios.get('/profile').then(({data}) => {
                setUser(data);
                setReady(true);
            })
        }
    },[user])

    return (
        <UserContextProvider value={{user,setUser,ready}}>
            {props.children}
        </UserContextProvider>
    )
} 

