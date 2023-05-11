import { useState } from "react";
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
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Cooked food",
      content: "I made a burger today",
      author: "mike",
    },
    {
      id: 2,
      title: "Bought flowers",
      content: "Today I got violets from the floriest",
      author: "lura",
    },
    {
      id: 3,
      title: "I like water",
      content: "Water is good for hydration",
      author: "tim",
    },
  ]);


  return (
    <div>
      <PostNew />
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