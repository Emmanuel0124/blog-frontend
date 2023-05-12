export function PostNew() {
  return (<div id="posts-new">
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
