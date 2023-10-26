import React, { useState } from 'react';
import classPosts from './ProfileUserPosts.module.css';
import PostTxt from './ProfileUsersPostText';
import ClassInput from '../Profile-input/ProfileInput.module.css';

const ProfilePost = (props) => {
  const [newPostText, setNewPostText] = useState('');

  const handleAddPost = () => {
    props.addPost(newPostText); 
    setNewPostText(''); 
  };

  return (
    <div>
      <div className={ClassInput.items}>
        <textarea
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        ></textarea>
        <button onClick={handleAddPost}>send</button>
      </div>
      <div>
        <div className={classPosts.postRow}>
          <div className={classPosts.likePost}>
            {props.text.map((t) => (
              <PostTxt text={t.text} id={t.id} likes={t.likes} foto={t.foto} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;