import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";

export default function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Quincy" body="I'm awesome" />
        <Post author="Random" body="you're awesome" />
      </ul>
    </>
  );
}
