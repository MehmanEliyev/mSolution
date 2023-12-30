import {createContext,useContext,useState} from 'react';

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const[user,setUser] = useState({name: '', isAuthenticated: false});

    const login = (userName,password) => {
        return new Promise ((resolve,reject)=>{
            if(userName === "admin" && password === "12345" ){
                setUser({name: userName, isAuthenticated: true});
                resolve("success")
            }else{
                reject("Incorrect Password")
            }
        })
    }

    const logOut = () =>{
        setUser({...user,isAuthenticated: false})
    }

    return (
        <AuthContext.Provider value={{user,login,logOut}}>
            <>
                
            </>
        </AuthContext.Provider>
    )
}