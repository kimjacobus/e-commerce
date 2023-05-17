import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Glogin2 = () => {
  const [user, setUser] = useState([])
  const [profile, setProfile] = useState([])

  const googleCallback = 'http://localhost:8080/oauth2/callback/google'
  const endpoint = 'https://www.googleapis.com/oauth2/v3/certs'
  const auth = 'https://accounts.google.com/o/oauth2/auth'
  const token = 'https://accounts.google.com/o/oauth2/token'
  const userI = 'https://www.googleapis.com/oauth2/v3/userinfo'
  const reg = '{baseUrl}/{action}/oauth2/code/{registrationId}'

  // stash
  //  .post(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${user.access_token}`)

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  })

  useEffect(() => {
    if (user) {

      // axios
      //   .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`)
      //   .then((res) => {
      //     console.log(res);
      //     return res
      //   })
        // .then((res) => {

          axios.post(`https://oauth2.googleapis.com/tokeninfo?access_token=${user.access_token}`)
        .then((res)=> {
          console.log(res);

        })

        .catch((err) => console.log())
    }
  }, [user])

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout()
    setProfile(null)
  }

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  )
}


        // axios
        //   .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
        //     headers: {
        //       Authorization: `Bearer ${user.access_token}`,
        //       Accept: 'application/json',
        //     },
        //   })
        // .then((res) => {
        //   setProfile(res.data)
        //   console.log(res.data)
        //   console.log(res.access_token);

        // })