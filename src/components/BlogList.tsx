import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import '../arjunblog.css';

interface BlogListProps {
  blogs: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div>
     <ul>
       {blogs.map((blog) => (
         <li key={blog._id}>
           <h2>{blog.post_title}</h2>
           <p>{blog.post_content}</p>
           <Link to={`/blogs/${blog._id}`}>Read More</Link> 
         </li>
       ))}
     </ul>
    </div>
  );
};

export default BlogList;