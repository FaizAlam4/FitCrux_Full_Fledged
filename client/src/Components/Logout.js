import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Logout() {
    const navigate=useNavigate();
    useEffect(() => {
        //cannt use async inside useeffect but can use promises
        myfuncAbout();
    }, [])


    const myfuncAbout = async () => {
        try {
            const res = await fetch('http://localhost:4000/logout', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }

            navigate('/login');

        }
        catch (err) {
            console.log(err);

        }
    }
  return (
    <div>
      Hi logout
    </div>
  )
}

export default Logout;
