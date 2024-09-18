import React, { useEffect, useState } from 'react';
import axios from '../apiAxiosConfig'; 
import BlogDetail from '../components/BlogDetail';
import { BlogPost } from '../types';
import { useParams } from 'react-router-dom';
import '../arjunblog.css';


const BlogDetailPage: React.FC = () => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();  

  useEffect(() => {
    axios.get(`/blog-posts/${id}`) 
      .then(response => {
        
        setBlog(response.data.data); 
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching blog post');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Please wait. Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  
  return (
    <body>
      <div>
        {blog ? <BlogDetail blog={blog} /> : <p>No post not found</p>}
      </div>
    </body>
  );

};

export default BlogDetailPage;

