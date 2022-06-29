import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery ,useGetPostByLimitQuery,
   useDeletePostMutation, useCreatePostMutation} from './services/post';

function App() {
 const responseInfo = useGetAllPostQuery()
  //const responseInfo = useGetPostByIdQuery(8)
  //const responseInfo = useGetPostByLimitQuery(4)
  //const [deletePost , responseInfo] = useDeletePostMutation()
  //const [createPost , responseInfo] = useCreatePostMutation()

  console.warn("Response Information: " , responseInfo)
  console.warn("Data: " , responseInfo.data)
  return (
    //Get all data
    
    <div className="App">
    <h1>Redux Tollkit Get All Data</h1>
    {
      responseInfo.data.map((post ,i)=>
      <div key={i}>
        <h2>{post.id}:  {post.title}</h2>
        <p>{post.body}</p>
        <hr/>
        </div>)
    }
    </div>
/*
    //Get Single Data
    
    <div className='App'>
    <h1>Redux toolkit get single data</h1>
    <h2>{responseInfo.data.id}{responseInfo.data.title}</h2>
    <p>{responseInfo.data.body}</p>
    </div>

    //Get Limited Data
    <div className="App">
    <h1>Redux Tollkit Get Limit Data</h1>
    {
      responseInfo.data.map((post ,i)=>
      <div key={i}>
       <h2>{post.id}:  {post.title}</h2>
        <p>{post.body}</p>
        <hr/>
        </div>)
    }
    </div>
    
    //Delete Data
   <div className='App'>
   <h1>Redux toolkit (Delete Data)</h1>
   <button onClick={()=>{deletePost(2)}}>Delete Post</button>
   </div>
   
   //Create Data
   <div className='App'>
    <h1>Redux toolkit (Create Data)</h1>
   <button onClick={()=>{createPost()}}>Create Post</button>
   </div>
   */
  );
}

export default App;
