import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Ajay7548")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="flex  flex-col items-center">
      <div className="text-center w-full m-4 p-4 bg-slate-600 text-white text-3xl rounded-md">
        Github Repositories: {data.name}
      </div>
        <img 
        className="h-80 rounded-lg overflow-hidden"
        src={data.avatar_url}></img>
      </div>
    </>
  );
}

export default Github;
