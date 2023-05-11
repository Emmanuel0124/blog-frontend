import { useState, useEffect } from "react";
import axios from "axios";

function Header() {
  return(<header>
    <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
  </header>);
}

function PostNew() {
  return(<div id="posts-new">
  <h1>New post</h1>
  <form>
  <div>
    Title: <input type="text" />
  </div>
  <div>
    content: <input type="text" />
  </div>
  <div>
  <button type="submit">Create post</button>
  </div>
  </form>
</div>);
}

function PostIndex(props) {
  console.log(props);
  return(<div id="posts-index">
  <h1>All posts</h1>
  {props.posts.map(post => (
  <div key={post.id} className="posts">
    <h2>{post.title}</h2>
          <p>content: {post.content}</p>
          <p>Author: {post.author}</p>
          <button>More info</button>
  </div>
  ))}
</div>);
}

function Footer() {
  return(<footer>
    <p>Copyright 20XX</p>
  </footer>);
}


function Content() {
  const [posts, setPosts] = useState([])

  const handleIndexPosts = () => {
    console.log('in handle index posts')
    // make my web request to api
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data);
      // posts = response.data
      setPosts(response.data);

    })
  }

  useEffect(handleIndexPosts, [])

  return (
    <div>
      <PostNew />
      <button onClick={handleIndexPosts}>Get data</button>
      <PostIndex posts={posts} />
    </div>
  );
}




function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}



export default App;