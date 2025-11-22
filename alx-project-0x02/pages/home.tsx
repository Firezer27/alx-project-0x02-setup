import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-10">
        <h1 className="text-3xl font-bold text-green-600">Home Page</h1>
        <p className="mt-4 text-gray-700">
          This is the Home page of the project.
        </p>
      </main>
    </div>
  );
}
