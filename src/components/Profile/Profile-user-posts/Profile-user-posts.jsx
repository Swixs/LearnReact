import React, { useState } from 'react';
import classPosts from './ProfileUserPosts.module.css';
import PostTxt from './ProfileUsersPostText';
import ClassInput from '../Profile-input/ProfileInput.module.css';

const ProfilePost = (props) => {
  const [newPostText, setNewPostText] = useState(props.newTextInput);

  const handleAddPost = () => {
    props.addPost(newPostText);
    setNewPostText(''); 
    console.log(props);
  }

  const onPostChange = (event) => {
    const text = event.target.value;
    setNewPostText(text); 
  }



  return (
    <div>
      <div className={ClassInput.items}>
        <textarea
          value={newPostText}
          onChange={onPostChange}
        />
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