/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext";





export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('https://blog-backend-1avk.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  // eslint-disable-next-line
}, []);

  function Logout() {
    fetch('https://blog-backend-1avk.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
    window.location.reload();
  }


  const username = userInfo?.username;

  return (
    <header className="">
      <Link to="/"><h2 className="logo">Daily<span className="dev">Dev.</span></h2></Link>
      <nav>
        {username && (
          <>
            <Link to="/create"><button className="header-btn-create">Create Blog</button></Link>
            
            <button className="header-btn" onClick={Logout}>Logout</button>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" ><button className="header-btn">Login</button></Link>
            <Link to="/register"><button className="header-btn">Signup</button></Link>
          </>
        )}
      </nav>
    </header>
  );
}
