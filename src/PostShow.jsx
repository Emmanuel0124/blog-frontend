export function PostShow(props) {
  console.log(props.post);
  return (
    <div>
      <h2>Title: {props.post.title}</h2>
      <h2>Content: {props.post.body}</h2>
    </div>

  );
}
