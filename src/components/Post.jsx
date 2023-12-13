import classes from "./Post.module.css";
import { TiDeleteOutline } from "react-icons/ti";

export default function Post({ author, body, onDeletePost, id}) {
  return (
    <div className={classes.overflow}>
      <li className={classes.post}>
        <div className={classes.iconwrapper} >
          <TiDeleteOutline className={classes.icon} onClick={() => onDeletePost(id)} />
        </div>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </li>
    </div>
  );
}
