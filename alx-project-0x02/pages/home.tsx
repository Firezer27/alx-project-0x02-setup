import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div>
      <Header />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>

        <Card title="Welcome" content="This is the home page content." />
      </div>
    </div>
  );
};

export default HomePage;
