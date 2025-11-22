// pages/posts.tsx
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      const formatted = data.slice(0, 10).map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formatted);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Posts Page</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p, index) => (
            <PostCard
              key={index}
              title={p.title}
              content={p.content}
              userId={p.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
