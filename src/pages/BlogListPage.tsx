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
      <body>
       <p>Please wait. Loading...</p>
       </body>
       );
  }

  if (error) {
    
    return  (
    <body>
   
     <p>{error}</p>
     </body>
    );
  }

  return (
    <body>
      <div>
        <BlogList blogs={blogs} />
      </div>
    </body>
  );
};

export default BlogListPage;