import React from "react";
import { TiTick } from "react-icons/ti";
import "./singleCard.css";

const SingleCard = ({ user }) => {
  const { name, profileImg, city, gender, industry, skills, isVerified } = user;

  return (
    <>
      <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={profileImg}
            alt={`${name}s img`}
            className="h-80 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mt-4">
            {name}{" "}
            {isVerified && (
              <span className="bg-blue-400 text-white rounded-full text-xl">
                <TiTick />
              </span>
            )}
          </h2>
          <p className="para">City : {city}</p>
          <p className="para">Gender : {gender}</p>
          <p className="para">Industry : {industry}</p>
          <p className="para">Industry : {industry}</p>
          <p className="para">Skills : {skills.map((skill) => `${skill}, `)}</p>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
