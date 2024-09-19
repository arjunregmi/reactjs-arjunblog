export interface BlogPost {
    id: string;
    post_title: string;
    post_content: string;
    user_id: string;
    updated_at: string;
    created_at: string;
    author?: string;  
  }
  
  export interface ApiResponse {
    success: boolean;
    data: BlogPost[];
    message: string;
  }