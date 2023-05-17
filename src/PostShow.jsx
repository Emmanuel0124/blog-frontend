import axios from "axios"

export function PostShow(props) {
  const handleSubmit = (event) => {
    // stop normal HTML form behavior
    event.preventDefault();
    // make request to rails 
    const params = new FormData(event.target);
    axios.patch('http://localhost:3000/posts/2.json', params).then(response => {
      console.log(response.data);
    })
    console.log('handling submit');
  }
  console.log(props.post);
  return (
    <div>
      <h2>Title: {props.post.title}</h2>
      <h2>Content: {props.post.body}</h2>
      
      <form onSubmit={handleSubmit}>
        <br/>
       <p>Title: <input name="title" type="text" /></p>
       <p>Body: <input name="body"/></p>
       <button type="input">Update post</button>
    </form>


    </div>

  );
}
