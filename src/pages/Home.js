
import { useEffect, useState } from "react";


const Home = () => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {

        setUserData(Object.values(JSON.parse(localStorage.getItem("data"))));

    }, [])

    return (
      <div>
        {userData ? userData.map((user, index) => {
            return (
                <div key={index}>
                    <div>{user.email}</div>
                    <div>{user.dob}</div>
                </div>
            )}
        ) : 
            (
                <div>
                    No data
                </div>
            )
        }
        
      </div>
    );
  }
  
  export default Home;