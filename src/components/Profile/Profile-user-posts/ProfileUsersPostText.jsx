import { NavLink } from "react-router-dom";
import classPosts from './ProfileUserPosts.module.css'

const PostTxt = (props) => {
    let path = '/ProfilePost' + props.id

    return <div className={classPosts.likepost}>
        <div className={classPosts.postRow} >
            <img className={classPosts.postImg} src={props.foto} />
            <div className={classPosts.likePost}>{props.text}</div>
            <div className={classPosts.likePost}>{props.likes}</div>
        </div>
    </div>
}

export default PostTxt