import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/other.css';
import zigzag from '../img/Zizag.svg';

export default function SingleBlog() {
  const { blogId } = useParams(); // Extracting the blogId from the URL
  const [blog, setBlog] = useState(null); // State for the single blog

  useEffect(() => {
    // Fetch the single blog data using the blogId
    fetch(`https://kamalapi.onrender.com/blog/${blogId}`)
      .then(response => response.json())
      .then(result => {
        if (result) {
          setBlog(result.data); // Set the fetched blog data to state
          console.log(blog);
        } else {
          console.error('Blog not found:', result);
        }
      })
      .catch(error => console.error('Error fetching blog data:', error));
  }, [blogId]);

  if (!blog) {
    return <p>Loading...</p>; // Show a loading message while fetching the data
  }

  return (
    <div className='blogSingle blogs'>
      <img className='zigzag' src={zigzag} alt="zigzag" />
      <div className="container">
        <div className="card">
          <div className="image">
            <img src={blog.blog_image?.url || require('../img/blog.png')} alt={blog.title} />
          </div>
          <h3>{blog.title}</h3>
          <p>{blog.subject}</p>
        </div>
      </div>
    </div>
  );
}
