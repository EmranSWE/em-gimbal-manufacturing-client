import { useEffect, useState } from "react"

const useAdmin = user =>{
    const [admin,setAdmin ]= useState(false);
    const [adminLoading,setAdminLoading ]= useState(true);
    useEffect(()=>{
        const email = user?.email;
        if(email){
            if(email){
                fetch(`https://em-gimbal-server-side.onrender.com/admin/${email}`,{
                method:"Get",
                headers:{
                    'content-type':"application/json",
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=> res.json())
            .then(data=>{
               
                setAdmin(data.admin);
                setAdminLoading(false);
            })
            }
        }
    },[user])
    return [admin,adminLoading]
}
export default useAdmin;