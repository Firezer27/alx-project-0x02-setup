// pages/home.tsx
import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const addPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Add New Post
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addPost}
      />
    </div>
  );
};

export default HomePage;
