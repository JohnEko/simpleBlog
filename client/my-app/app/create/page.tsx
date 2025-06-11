'use client'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import dynamic from 'next/dynamic';
import "./createPost.css"
import React, { useEffect, useState } from 'react';



 dynamic(import('react-quill-new'), {ssr: false});


const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [files, setFiles] = useState('')

  const createNewPost = async () => {
    console.log('submitForm')
    if ( 
        title &&
        summary &&
        content &&
        files
    ){
      const formData = new FormData();
      formData.append('title', title);
      formData.append('summary', summary);
      formData.append('content', content);
      formData.append('file', files[0]);
    
//       const response = await fetch('http://localhost:4000/create', {
//           method: 'POST',
//           body: formData,

//   })
//       console.log(response.formData)
}
useEffect(() => {
  setFiles(files)
}, [])
}
  return (
    // <h2>CreatePost</h2>
      <form onSubmit={createNewPost}>
         
       
          <input type="title"  
              placeholder='Title' 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />
          <input type="summary"  
                placeholder='Summary'
                value={summary} 
                onChange={(e) => setSummary(e.target.value)}
              />
          <input 
              type="file" 
              accept='image/*'
              value={files}
              onChange={(e) => setFiles(e.target.value)}
            />
          <ReactQuill 
                value={content} 
                onChange={(newValue)=> setContent(newValue)} 
                modules={{
                          toolbar: [
                            [{ header: [1, 2, false] }],
                            ["bold", "italic", "underline", "strike"],
                            ["link"],
                            [{ align: [] }],
                            ["blockquote", "code-block"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            [{ script: "sub" }, { script: "super" }],
                          ],
                          }}
                          formats={[
                            "header",
                            "bold",
                            "italic",
                            "underline",
                            "strike",
                            "link",
                            "align",
                            "blockquote",
                            "code-block",
                            "list",
                            "script",
                          ]}
                />
               
          <button style={{marginTop:'5px'}}>Create post</button>
      </form>
  )
}

export default CreatePost