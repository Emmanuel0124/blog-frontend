function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

      <div id="posts-new">
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
      </div>

      <div id="posts-index">
        <h1>All posts</h1>
        <div className="posts"/>
          <h2>Mud Pie</h2>
          <p>content: i made a mud pie today</p>
          <p>author: Jay Wengrow</p>
          <button>More info</button>
      </div>

      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

export default App;