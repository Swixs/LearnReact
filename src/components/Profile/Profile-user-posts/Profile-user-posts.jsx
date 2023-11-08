import React, { useState } from 'react';
import classPosts from './ProfileUserPosts.module.css';
import PostTxt from './PostTxt';
import ClassInput from '../Profile-input/ProfileInput.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePost = (props) => {
  const [newPostText, setNewPostText] = useState(props.newTextInput);

  const handleAddPost = () => {
    props.addPost(newPostText);
    setNewPostText(''); 
  }

  const onPostChange = (event) => {
    const text = event.target.value;
    setNewPostText(text); 
  }



  return (
    <div>
      <div className={ClassInput.items}>
      <input class="form-control form-control-sm" width={400} type="text" placeholder='your comment' aria-label=".form-control-sm example"
          value={newPostText}
          onChange={onPostChange}
        />
        <button type="button" class="btn btn-outline-primary" onClick={handleAddPost}>Primary</button>
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