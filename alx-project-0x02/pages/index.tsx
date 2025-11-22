import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-10 text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to the ALX Next.js Project!
        </h1>
        <p className="mt-4 text-gray-700">
          Your setup is working correctly with TypeScript and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
