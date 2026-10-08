import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const URL = "https://jsonplaceholder.typicode.com/users";

function UserSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 h-4 w-20 rounded bg-gray-200" />

      <div className="mb-4 h-6 w-3/4 rounded bg-gray-200" />

      <div className="mb-3 h-5 w-full rounded bg-gray-200" />

      <div className="mb-4 h-5 w-5/6 rounded bg-gray-200" />

      <div className="border-t border-gray-200 pt-3">
        <div className="mb-2 h-5 w-1/2 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
      </div>
    </div>
  );
}

function UserCard({ user }) {
  return (
    <Link
      to={`/user/${user.id}`}
      className="group block rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
          @{user.username}
        </span>

        <span className="text-xs text-gray-400">#{user.id}</span>
      </div>

      <h2 className="mb-4 text-xl font-bold text-gray-900 group-hover:text-blue-600">
        {user.name}
      </h2>

      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-4 w-4 shrink-0" />
          <span className="break-all">{user.email}</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 shrink-0" />
          <span>{user.phone}</span>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-100 pt-4">
        <h3 className="font-semibold text-gray-900">
          {user.company.name}
        </h3>

        <p className="mt-1 text-sm leading-5 text-gray-500">
          {user.company.catchPhrase}
        </p>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchUsers() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch users.Status: ${response.status} `
        );
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid data received from the server.");
      }

      setUsers(data);
    } catch (error) {
      console.error("Fetch users error:", error);
      setError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            User List
          </h1>

          <p className="mt-2 text-gray-500">
            Browse all users and view their details.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <UserSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <h2 className="font-semibold text-red-800">
              Unable to load users
            </h2>

            <p className="mt-2 text-sm text-red-600">
              {error}
            </p>

            <button
              type="button"
              onClick={fetchUsers}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && users.length === 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              No users found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              There are currently no users to display.
            </p>
          </div>
        )}

        {/* Users */}
        {!loading && !error && users.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}