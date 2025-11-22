import Header from "../components/layout/Header";
import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div>
      <Header />

      <main className="p-10">
        <h1 className="text-3xl font-bold text-green-600 mb-8">Home Page</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Reusable Card Component"
            content="This is a dynamic card that receives props for title and content."
          />

          <Card
            title="Next.js + TypeScript"
            content="We are learning how to build reusable components using TypeScript interfaces."
          />

          <Card
            title="ALX Project"
            content="This card is part of your Next.js project setup task."
          />
        </div>
      </main>
    </div>
  );
}
