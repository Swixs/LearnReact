import React from 'react';
import ProfileLogo from "./Profile-user";
import ProfileClass from './Profile.module.css';
import ProfilePost from "./Profile-user-posts/Profile-user-posts";

const Profile = (props) => {
  return (
    <main className={ProfileClass.main}>
      <div>
        <img className={ProfileClass.background} src='https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149161403.jpg' alt="background"></img>
      </div>
      <ProfileLogo />
      <div className="posts">
        <ProfilePost
          profilePage={props.profilePage}
          dispatch={props.dispatch}
        />
      </div>
    </main>
  );
}

export default Profile;
