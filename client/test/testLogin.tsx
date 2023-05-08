import { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function Log() {
  interface User {
    access_token: string;
    name: string;
    email: string;
    picture: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Record<string, any>>({});

  const login = useGoogleLogin({
    onSuccess: (codeResponse: any) => setUser(codeResponse),
    onError: (error: any) => console.log("Login Failed", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile({});
  };

  return (
    <div>
      <h2>React google login </h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.picture} alt="user img" />
          <h3>User Logged in</h3>
          <p>Name : {profile.name} </p>
          <p>Email: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}> Log Out </button>
        </div>
      ) : (
        <button onClick={() => login()}> Sign in with Google</button>
      )}
    </div>
  );
}
