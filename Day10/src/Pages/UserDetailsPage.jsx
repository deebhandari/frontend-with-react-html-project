import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";



export default function UserDetailsPage() {
  const [userData, setUserData] = useState({});
  const URL = 'https://jsonplaceholder.typicode.com/users'
  let data = useLoaderData();
  function fetchSingleUserData() {
    try {
      fetch(`${URL}/${data.params.id}`)
        .then(res => res.json())
        .then(data => setUserData(data))
    } catch (error) {
      console.error(error)
    }
  }
  console.log(userData)

  useEffect(() => {
    fetchSingleUserData()
  }, [])

  return <section className="p-10">

    <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="back mb-5">
        <Link to='/'>
          <button>
            Back
          </button>
        </Link>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
        <p className="text-sm text-gray-500">@{userData.username}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-gray-500">ID</p>
          <p className="mt-1 text-gray-900">{userData.id}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Email</p>
          <p className="mt-1 text-gray-900">{userData.email}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Phone</p>
          <p className="mt-1 text-gray-900">{userData.phone}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Website</p>
          <p className="mt-1 text-blue-600">{userData.website}</p>
        </div>
      </div>

      <div className="my-6 border-t border-gray-200" />

      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Address</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-gray-500">Street</p>
            <p className="mt-1 text-gray-900">
              {userData.address?.street}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Suite</p>
            <p className="mt-1 text-gray-900">
              {userData.address?.suite}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">City</p>
            <p className="mt-1 text-gray-900">
              {userData.address?.city}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Zip Code</p>
            <p className="mt-1 text-gray-900">
              {userData.address?.zipcode}
            </p>
          </div>
        </div>
      </div>

      <div className="my-6 border-t border-gray-200" />

      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Location</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-gray-500">Latitude</p>
            <p className="mt-1 text-gray-900">
              {userData.address?.geo?.lat}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Longitude</p>
            <p className="mt-1 text-gray-900">
              {userData.address?.geo?.lng}
            </p>
          </div>
        </div>
      </div>

      <div className="my-6 border-t border-gray-200" />

      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Company</h3>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Company Name</p>
            <p className="mt-1 text-gray-900">
              {userData.company?.name}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Catch Phrase</p>
            <p className="mt-1 text-gray-900">
              {userData.company?.catchPhrase}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Business</p>
            <p className="mt-1 text-gray-900">
              {userData.company?.bs}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
}