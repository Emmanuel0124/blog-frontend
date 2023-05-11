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
  <div className="posts"/>
    <h2>Mud Pie</h2>
    <p>content: i made a mud pie today</p>
    <p>author: Jay Wengrow</p>
    <button>More info</button>
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
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 2,
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 3,
      title: "___",
      body: "___",
      image: "___",
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