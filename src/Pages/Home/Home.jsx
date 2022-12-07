import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleCard from "../../Components/SingleCard/SingleCard";

const Home = () => {
  const [skill, setSkill] = useState("any");

  let data = useSelector((state) => state.userInfo);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-10">
      <div className="text-center my-6">
        <label htmlFor="skill" className="block text-xl font-semibold">
          Filter Users By Skill
        </label>
        <select
          name="skill"
          id="skill"
          className="px-6 py-3 mt-3 font-medium bg-green-300"
          onChange={(e) => setSkill(e.target.value)}
        >
          <option value="any">Any</option>
          <option value="react">React</option>
          <option value="android">Android</option>
          <option value="c">C</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {/* for any skill */}
        {skill === "any" &&
          data.map((user) => <SingleCard key={user._id} user={user} />)}

        {/* for react  */}
        {skill === "react" &&
          data.map(
            (user) =>
              user.skills.includes("React") && (
                <SingleCard key={user._id} user={user} />
              )
          )}

        {/* for android */}
        {skill === "android" &&
          data.map(
            (user) =>
              user.skills.includes("Android") && (
                <SingleCard key={user._id} user={user} />
              )
          )}

        {/* for c */}
        {skill === "c" &&
          data.map(
            (user) =>
              user.skills.includes("C") && (
                <SingleCard key={user._id} user={user} />
              )
          )}
      </div>
    </div>
  );
};

export default Home;
