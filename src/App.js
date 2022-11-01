import "./App.css";
import React, { useState } from "react";
import SignIn from "./Components/SignIn";
import BlogsView from "./Components/BlogsView";

function App() {
  // Profile Pic URL :
  
  //https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ

  const [profileImg, setProfileImg] = useState("");
  const [userName, setUserName] = useState("");
  const [showBlogs, setShowBlogs] = useState(false);

  return (
    <div className="App">
      <div className="BlogContainer">
        <div>
          <div className="Header">
            <div className="HeaderTitle">Simple Blog</div>
            <div className="CropContainer">
              {showBlogs && (
                <img className="ProfileImg" src={profileImg} alt=""></img>
              )}
            </div>
          </div>
        </div>

        {!showBlogs && (
          <SignIn
            pageTitle={"Sign In"}
            setUserName={setUserName}
            setProfileImg={setProfileImg}
            setShowBlogs={setShowBlogs}
            userName={userName}
            profileImg={profileImg}
          ></SignIn>
        )}
        {showBlogs && (
          <BlogsView userName={userName} profileImg={profileImg}></BlogsView>
        )}
      </div>
    </div>
  );
}

export default App;
