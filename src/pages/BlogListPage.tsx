import React, { useEffect, useState } from 'react';
import axios from '../apiAxiosConfig'; 
import BlogList from '../components/BlogList';
import { BlogPost } from '../types';
import '../arjunblog.css';


const BlogListPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/blog-posts')
      .then(response => {
        if (response.data && Array.isArray(response.data.data)) {
          setBlogs(response.data.data); 
        } else {
          setError('Unexpected response format');
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Error fetching blog list'); 
        setLoading(false);
      });
  }, []);

  if (loading) {
    return  (
      <div className="container">
       <p>Please wait. Loading...</p>
       </div>
       );
  }

  if (error) {
    
    return  (
    <div className="container">
   
     <p>{error}</p>
     </div>
    );
  }

  return (
    <div className="container">
      
        <BlogList blogs={blogs} />
      
    </div>
  );
};

export default BlogListPage;