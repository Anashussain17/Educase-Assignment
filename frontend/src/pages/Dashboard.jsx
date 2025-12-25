import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import profileImage from "../images/image.png"

const Dashboard = () => {
  const { email } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_URL}/api/dashboard/${email}`
        );
        if (res.data.status) {
          setUser(res.data.user);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [email]);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
     
    <div className="w-full min-h-screen bg-gray-100 sm:max-w-[360px] mx-auto flex flex-col">
{/* account */}
        <div className="px-4 py-3 bg-white ">
          <h2 className="text-sm  text-gray-800">
            Account Settings
          </h2>
        </div>
        {/* profile */}
        <div className="px-4 py-4 flex gap-3 items-start">
          <img
            src={profileImage}
            className="w-15 h-15 rounded-full object-cover"
            alt="profile"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">
              {user.fullname}
            </p>
            <p className="text-xs text-gray-900">
              {user.email}
            </p>
          </div>
        </div>
        {/* description */}
        <div className="px-4 text-xs tracking-wide text-gray-800 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </div>
        <hr class=" mt-3 border-dashed border-t-1 border-gray-300 w-full"></hr>

        <hr class="mt-auto mb-9 border-dashed border-t-1 border-gray-300 w-full"/>
      </div>
    </div>
  );
};

export default Dashboard;
