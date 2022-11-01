import React, { useState } from "react";
import validateText from "../Utils/Validation";
import TextFieldInput from "./TextFieldInput";

const SignIn = ({
  pageTitle,
  setUserName,
  setProfileImg,
  setShowBlogs,
  userName,
  profileImg
}) => {
  const [userNameMsg, setUserNameMsg] = useState("");
  const [profileImgMsg, setProfileImgMsg] = useState("");
  return (
    <React.Fragment>
      <>
        <div className="PageTitle">{pageTitle}</div>
        <TextFieldInput
          inputTitle={"Username:"}
          setStateHook={setUserName}
        ></TextFieldInput>
        <TextFieldInput
          inputTitle={"Profile Photo URL:"}
          setStateHook={setProfileImg}
        ></TextFieldInput>
        <button
          className="BlogButton"
          onClick={() => {
            setUserNameMsg("");
            setProfileImgMsg("");
            const userNameValid = validateText(userName);
            const photoUrlValid = validateText(profileImg);
            if (userNameValid && photoUrlValid) {
              setShowBlogs(true);
            }
            if (!userNameValid) {
              setUserNameMsg("Please enter a Username.");
            }
            if (!profileImg) {
              setProfileImgMsg("Please enter Photo URL.");
            }
          }}
        >
          Sign In
        </button>
        <div className="Msg">{userNameMsg}</div>
        <div className="Msg">{profileImgMsg}</div>
      </>
    </React.Fragment>
  );
};

export default SignIn;
