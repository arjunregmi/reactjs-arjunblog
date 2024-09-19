import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import '../arjunblog.css';

interface BlogListProps {
  blogs: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div >
     <ul className='blog-list'>
       {blogs.map((blog) => (
         <li key={blog.id}>
           <h2>{blog.post_title}</h2>
           <p>{blog.post_content.slice(0, 300)}...</p>
           <Link to={`/blogs/${blog.id}`}>Read More</Link> 
         </li>
       ))}
     </ul>
    </div>
  );
};

export default BlogList;