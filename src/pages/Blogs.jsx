import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import '../css/other.css';
import zigzag from '../img/Zizag.svg';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 4;

  useEffect(() => {
    // Fetch the blog data from the API
    fetch('https://kamalapi.onrender.com/blog')
      .then(response => response.json())
      .then(result => {
        if (Array.isArray(result.data)) {
          setBlogs(result.data); // Access the 'data' property containing the array
        } else {
          console.error('Expected an array but received:', result);
        }
      })
      .catch(error => console.error('Error fetching blog data:', error));
  }, []);

  // Calculate the blogs to display on the current page
  const displayBlogs = blogs.slice(
    currentPage * blogsPerPage,
    (currentPage + 1) * blogsPerPage
  );

  // Function to handle page click
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='blogs'>
      <div className="backImg"></div>
      <img className='zigzag' src={zigzag} alt="" />
      <div className="container">
        <div className="holder">
          {Array.isArray(displayBlogs) && displayBlogs.length > 0 ? (
            displayBlogs.map((blog, index) => (
              <a href={`/singleBlog/${blog._id}`} className="card" key={index}>
                <div className="image">
                  <img src={blog.blog_image?.url || require('../img/blog.png')} alt={blog.title} />
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.subject}</p>
              </a>
            ))
          ) : (
            <p>There are no Blogs yet</p>
          )}
        </div>
        {Array.isArray(displayBlogs) && displayBlogs.length > 0 && (
          <ReactPaginate
            previousLabel={<MdKeyboardDoubleArrowLeft />}
            nextLabel={<MdKeyboardDoubleArrowRight />}
            breakLabel={"..."}
            pageCount={Math.ceil(blogs.length / blogsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        )}

      </div>
    </div>
  );
}
