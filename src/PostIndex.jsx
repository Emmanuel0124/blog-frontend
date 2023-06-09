export function PostIndex(props) {
  console.log(props);
  return (<div id="posts-index">
    <h1>All posts</h1>
    {props.posts.map(post => (
      <div key={post.id} className="posts">
        <h2>{post.title}</h2>
        <p>content: {post.body}</p>
        <p>Author: {post.user_id}</p>
        <button onClick={() => {props.onShowPost(post)}}>More info</button>
      </div>
    ))}
  </div>);
}
