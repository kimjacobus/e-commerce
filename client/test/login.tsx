import { useEffect } from "react";
import { google } from "@react-oauth/google";

// pas reussi brouillon.
export default function Login() {
  function handleCallbackResponse(response: any) {
    console.log("Encoded JWT ID token:" + response.credential);
  }

  useEffect(() => {
    /**Global google */
    google.account.id.initialize({
      client_id:
        "964065372421-01o3o5knudb3j34k6n41pnsc1ddkdcs2.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <div id="signInDiv"></div>
      <div>hello world</div>
    </>
  );
}
