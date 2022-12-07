import React from "react";
import { useSelector } from "react-redux";
import SingleCard from "../../Components/SingleCard/SingleCard";

const Home = () => {
  const data = useSelector((state) => state.userInfo);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {data.map((user) => (
        <SingleCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Home;
