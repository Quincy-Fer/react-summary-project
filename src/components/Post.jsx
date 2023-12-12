import classes from "./Post.module.css";

export default function Post({ author, body }) {
  return (
    <div className={classes.overflow}>
      <li className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </li>
    </div>
  );
}
