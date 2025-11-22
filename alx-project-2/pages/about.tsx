import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-10">
        <h1 className="text-3xl font-bold text-purple-600">About Page</h1>
        <p className="mt-4 text-gray-700">
          This page contains information about the project.
        </p>
      </main>
    </div>
  );
}
