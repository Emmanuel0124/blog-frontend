import { useState, useEffect } from "react";
import axios from "axios";
import { PostNew } from "./PostNew";
import { PostIndex } from "./PostIndex";
import { Modal } from "./Modal";






export function Content() {
  const [posts, setPosts] = useState([]);

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const [currentPost, setCurrentPost] = useState({});


  const handleIndexPosts = () => {
    console.log('in handle index posts');
    // make my web request to api
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data);
      // posts = response.data
      setPosts(response.data);

    });
  };

  useEffect(handleIndexPosts, []);

  const handleShowPost = (post) => {
    console.log(post);
    console.log("handling show post.eventually this will change the value of isPostVisible")
    setIsPostsShowVisible(true);
    setCurrentPost(post)
  };

  const handleClose = () => {
    console.log("close modal")
    setIsPostsShowVisible(false);
  };




  return (
    <div>
      <PostNew />
      <button onClick={handleIndexPosts}>Get data</button>
      <PostIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        
       <h2>Title: {currentPost.title}</h2>
       <h2>Content: {currentPost.body}</h2>
      </Modal>
    </div>
  );
}
