import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const history = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    const { accessToken } = response;
    axios
      .post('{baseUrl}/oauth2/callback/{registrationId}', accessToken)
      .then((res) => {
        // Gestion de la réponse réussie du backend après validation du token
        console.log(res.data);
        // Rediriger vers la page de paiement ou autre
        setIsLoggedIn(true);
        history('/payment');
      })
      .catch((error) => {
        // Gestion des erreurs
        console.error(error);
      });
  };

  const responseFacebook = (response) => {
    const { accessToken } = response;
    axios
      .post('{baseUrl}/oauth2/callback/{registrationId}', accessToken)
      .then((res) => {
        // Gestion de la réponse réussie du backend après validation du token
        console.log(res.data);
        // Rediriger vers la page de paiement ou autre
        setIsLoggedIn(true);
        history('/payment');
      })
      .catch((error) => {
        // Gestion des erreurs
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Connexion avec Google et Facebook</h2>
      <button onClick={responseGoogle}>Se connecter avec Google</button>
      <button onClick={responseFacebook}>Se connecter avec Facebook</button>
    </div>
  )
}

export default Login;

//
//import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
//import { FacebookLoginWithButton } from 'facebook-login-react';
// {!isLoggedIn && (
//   <>
//     <GoogleOAuthProvider clientId="622609313112-fcj0ofbrgks5tubd8sgc8b4qgo9h07hn.apps.googleusercontent.com">
//       <GoogleLogin
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//         render={renderProps => (
//           <button onClick={renderProps.onClick}>Se connecter avec Google</button>
//         )}
//       />
//     </GoogleOAuthProvider>
//     <br />

//     <FacebookLoginWithButton
//       appId="1914233815616250"
//       fields="name,email,picture"
//       callback={responseFacebook}
//       render={renderProps => (
//         <button onClick={renderProps.onClick}>Se connecter avec Facebook</button>
//       )}
//     />
//   </>
// )}