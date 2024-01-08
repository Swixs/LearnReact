import React, { useState } from 'react';
import classPosts from './ProfileUserPosts.module.css';
import PostTxt from './PostTxt';
import ClassInput from '../Profile-input/ProfileInput.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/state';


const ProfilePost = (props) => {
  const [newPostText, setNewPostText] = useState(props.profilePage.NewTextInput);

  const handleAddPost = () => {
    props.dispatch(addPostActionCreator());
    setNewPostText('');
  };

  const onPostChange = (event) => {
    const newText = event.target.value;
    setNewPostText(newText);
    props.dispatch(updateNewPostTextActionCreator(newText));
  };

  return (
    <div>
      <div className={ClassInput.items}>
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="your comment"
          aria-label=".form-control-sm example"
          value={newPostText}
          onChange={onPostChange}
        />
        <button type="button" className="btn btn-outline-primary" onClick={handleAddPost}>
          Primary
        </button>
      </div>
      <div>
        <div className={classPosts.postRow}>
          <div className={classPosts.likePost}>
            {props.profilePage.text.map((t) => (
              <PostTxt key={t.id} text={t.text} id={t.id} likes={t.likes} foto={t.foto} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;
