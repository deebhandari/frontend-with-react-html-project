import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = "https://jsonplaceholder.typicode.com/users";

  async function fetchUsers() {
    try {
      setLoading(true);

      const res = await fetch(URL);

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();

      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="p-10">
      <h1 className="mb-5 text-3xl font-bold">
        User List
      </h1>

      {loading ? (
        <h1 className="text-5xl text-red-500">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {users.map((user) => (
            <Link key={user.id} to={`/user/${user.id}`}>
              <div className="cursor-pointer rounded-xl border p-5 hover:bg-yellow-50 hover:shadow-xl">
                <pre>{user.username}</pre>

                <h2 className="text-xl font-bold">
                  {user.name}
                </h2>

                <h3 className="flex gap-2">
                  <Mail />
                  {user.email}
                </h3>

                <h3 className="flex gap-2">
                  <Phone />
                  {user.phone}
                </h3>

                <div className="mt-3 border-t pt-3">
                  <h3>{user.company.name}</h3>

                  <p>{user.company.catchPhrase}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}