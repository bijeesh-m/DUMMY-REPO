import React, { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    const [toggle, setToggle] = useState(false);

    console.log(toggle);

    useEffect(() => {
        console.log("useEffect is running!");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch((err) => {
                console.log(err);
            });

        // const intervalId = setInterval(() => {
        //     console.log("Timer is running!");
        // }, 2000);

        // return () => {
        //     console.log("component is unmounted!");
        //     clearInterval(intervalId);
        // };
    }, [toggle]);

    // const handleToggle = () => {
    //     setToggle(!toggle);
    // };

    return (
        <div className=" p-5">
            <h1 className=" text-xl font-bold ">Users</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 ">
                {users.map((user) => {
                    return (
                        <div className=" border border-blue-500 p-5 my-1">
                            <h1 className=" text-lg font-bold">{user.name}</h1>
                            <p className=" text-sm font-thin">{user.email}</p>
                            <p className=" font-mono ">City :{user.address.city}</p>
                        </div>
                    );
                })}
            </div>

            {/* <button onClick={handleToggle}>Change state</button> */}
        </div>
    );
};

export default Users;
