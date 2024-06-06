import UserList from "./components/UserList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          User working days data
        </h1>
        <UserList />
      </div>
    </main>
  );
}
