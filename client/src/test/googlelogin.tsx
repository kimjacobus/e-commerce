// import { google } from 'googleapis'
import { GoogleLogin } from '@react-oauth/google'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import axios from 'axios'

export const GoogleAPI = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const history = useNavigate()

  //   const handleClick = async () => {
  //     // Load the Google API client library.
  //     await google.auth2.init({
  //       client_id: '359651432928-tld9uhl2u3n80fadh9u16roqmoo53r4h.apps.googleusercontent.com',
  //     })

  //     // Start the Google Sign-In flow.
  //     const user = await google.auth2.getAuthInstance().signIn()
  //     const idToken = user.getAuthResponse().id_token
  //     // Use the ID token to authenticate the user on your server.
  //     console.log(idToken)
  //   }

  //   return (
  //     <div>
  //       <button onClick={handleClick}>Sign in with Google</button>
  //     </div>
  //   )

  const responseMessage = (response: any) => {
    console.log('response message' + response )

    const { accessToken } = response

    axios.post('http://localhost:8080/oauth2/callback/google', { access_token: accessToken })
      .then((res) => {
        // Gestion de la réponse réussie du backend après validation du token
        console.log(res.data)
        // Rediriger vers la page de paiement ou autre
        setIsLoggedIn(true)
        history('/payment')
      })
      .catch((error) => {
        // Gestion des erreurs
        console.error(error)
      })
  }
  const errorMessage = () => {
    console.log(Error)
  }
  return (
    <div>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  )
}
