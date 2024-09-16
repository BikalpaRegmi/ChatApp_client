import { useState } from "react"
import SignIn from "../Components/SignIn"
import Signup from "../Components/Signup"
import ChatPage from "./ChatPage"

const HomePage = () => {
  const [signIn, setSignIn] = useState<Boolean>(true);
  const userInfo = localStorage.getItem('userinfo');
  const parsedUserInfo = userInfo ? JSON.parse(userInfo) : null


  return (<>
    {!parsedUserInfo ?
      (
    <div className="">
      <div className="box bg-gray-200 rounded-lg w-1/2 mx-auto mt-9">
        <h1 className="bg-lime-800 mx-auto  w-48 text-white text-center p-1 font-bold text-2xl">
          Belegram
        </h1>

        <div className="buttons flex pb-1 justify-around">
          <button
            onClick={() => setSignIn(true)}
            title="signIn"
            className="bg-blue-700 text-white font-semibold hover:bg-black rounded-xl px-3"
          >
            SignIn
          </button>
          <button
            onClick={() => setSignIn(false)}
            title="signUp"
            className="bg-blue-700 text-white font-semibold hover:bg-black rounded-xl px-3"
          >
            SignUp
          </button>
        </div>
        {signIn ? <SignIn setSignIn={setSignIn} /> : <Signup />}
      </div>
        </div>
      )
      :
   <ChatPage/>
}
  </>);
}

export default HomePage
