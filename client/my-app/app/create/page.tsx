'use client'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import dynamic from 'next/dynamic';
import "./createPost.css"

//const ReactQuill = dynamic(import("react-quill-new"),{ ssr: false });
const CreatePost = () =>{

  return (
    // <h2>CreatePost</h2>
      <form>
          <input type="title"  placeholder='{Title}'/>
          <input type="summary"  placeholder='{Summary}'/>
          <input type="file" />
          <ReactQuill />
      </form>
  )
}

export default CreatePost