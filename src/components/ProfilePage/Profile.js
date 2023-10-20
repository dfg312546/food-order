import StateContext from "../../store/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../AuthPage/auth";
import { signOut } from "firebase/auth";
import './Profile.css'

function Profile() {
  const Ctx = useContext(StateContext);
  const navigate = useNavigate()

  function logOut () {
    signOut(auth)
    Ctx.setIsLogIn(false)
    navigate('/')
  }

  console.log(auth.currentUser)
  // const createdAtDate = new Date(parseInt(auth.currentUser.metadata.createdAt));
  // console.log(createdAtDate)
  return (
    <>
    { auth.currentUser ? (
    <div className="profilePageContainer">
      <img className="profileImage" src={auth.currentUser.photoURL} alt="profile"/>
      <div className="profileInfo">
        <span>用戶名稱：{auth.currentUser.displayName}</span>
        <span>電子郵件：{auth.currentUser.email}</span>
        <span>加入時間：{auth.currentUser.metadata.creationTime}</span>
      </div>
      <button className="profileLogOutButton" onClick={logOut}>
        Log Out
      </button>
    </div>) :  (
      <p>您尚未登入</p>
    )
    }

    </>
  )
}

export default Profile;