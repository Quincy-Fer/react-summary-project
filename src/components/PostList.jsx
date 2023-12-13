import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./PostList.module.css";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [...existingPosts, postData]);
  }

  function deletePostHandler(id) {
    setPosts((existingPosts) => {
      return existingPosts.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post
              id={index}
              key={index}
              author={post.author}
              body={post.body}
              onDeletePost={deletePostHandler}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={classes.noposts}>
          <h2>There are no notes yet &#128517;</h2>
          <p>Click New Post to add some! </p>
        </div>
      )}
    </>
  );
}
