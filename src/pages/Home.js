
import { useEffect, useState } from "react";

const Home = () => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("data"));

        if(data) {
            setUserData(Object.values(data));
        }


    }, [])


    const sort = () => {

        let sortedData = [...userData].sort((a, b) => a.email > b.email ? 1 : -1 ); 

        setUserData(sortedData);

    }

    return (
      <div className="grid justify-center p-32">
        {userData ? (
            <div className="bg-slate-100 flex gap-8 justify-between p-4">
                <div>Email<span onClick={sort} className="ml-2 bg-black rounded text-white cursor-pointer pr-2 pl-2">&uarr;</span></div>
                <div>Data nasterii</div>
            </div>
        ) : null}
        {userData ? userData.map((user, index) => {
            return (
                <div className="flex gap-8 border-slate-100 border-b-2 border-l-2 border-r-2 p-4 justify-between" key={index}>
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