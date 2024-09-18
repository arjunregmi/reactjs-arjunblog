import React from 'react';
import { BlogPost } from '../types';
import '../arjunblog.css';

interface BlogDetailProps {
  blog: BlogPost;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
  return (
    <div>
      <h1>{blog.post_title}</h1>
      <p>{blog.post_content}</p>
      <p >Blog Author: {blog.author || 'Anonymous'}</p>
      <small>Created At: {new Date(blog.created_at).toLocaleString()}</small>
      <small>Updated At: {new Date(blog.updated_at).toLocaleString()}</small>
    </div>

  );
};

export default BlogDetail;