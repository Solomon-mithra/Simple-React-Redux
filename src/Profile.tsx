import React from "react";
import { useParams } from "react-router-dom";
import User from "./User";

function Profile() {
  const { username } = useParams<{ username: string }>();

  // Example: dynamic user data (could be fetched from API)
  const user = {
    username: username ?? "",
    email: username ? `${username}@example.com` : "",
    age: 25,
  };

  return (
    <div>
      <h2>Hello, {username}!</h2>
      <p>Welcome to your profile page.</p>
      <User username={user.username} email={user.email} age={user.age} />
    </div>
  );
}

export default Profile;