import { useState, useEffect } from "react";
import axios from "axios";
import { PostNew } from "./PostNew";
import { PostIndex } from "./PostIndex";

export function Content() {
  const [posts, setPosts] = useState([]);

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

  return (
    <div>
      <PostNew />
      <button onClick={handleIndexPosts}>Get data</button>
      <PostIndex posts={posts} />
    </div>
  );
}
