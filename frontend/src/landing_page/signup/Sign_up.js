import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Sign_up = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  // Replace with your Google OAuth Client ID
  const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        { theme: "outline", size: "large" }
      );
    }
  }, []);

  const handleGoogleResponse = (response) => {
    try {
      const decoded = jwt_decode(response.credential);
      setUser(decoded);

      // Optionally store temporarily in sessionStorage
      sessionStorage.setItem("user", JSON.stringify(decoded));

      setMessage(`Hello ${decoded.name}, you are logged in temporarily! ✅`);
    } catch (err) {
      console.error(err);
      setMessage("Google login failed ❌");
    }
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    setMessage("Logged out ✅");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src="logo.png" alt="Logo" className="login-logo" />
        <h2>Admin Login</h2>

        {/* Google Sign-In */}
        {!user && <div id="googleSignInDiv" style={{ marginBottom: "20px" }}></div>}

        {/* Display user info if logged in */}
        {user && (
          <div>
            <p>Welcome, {user.name} ({user.email})</p>
            <img src={user.picture} alt="Profile" style={{ width: "80px", borderRadius: "50%" }} />
            <br />
            <button onClick={handleLogout} className="login-btn">Logout</button>
          </div>
        )}

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Sign_up;
