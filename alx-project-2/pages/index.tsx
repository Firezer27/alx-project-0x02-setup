import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-10 text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to ALX Next.js Project Setup!
        </h1>
        <p className="mt-4 text-gray-700">
          Your Next.js + TypeScript + Tailwind project is running successfully.
        </p>
      </main>
    </div>
  );
}
