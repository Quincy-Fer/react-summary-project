import Post from "./Post";
import classes from "./PostList.module.css"

export default function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="Quincy" body="I'm awesome" />
      <Post author="Random" body="you're awesome" />
    </ul>
  );
}
