import React from 'react';

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* User Profile */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">User Profile</h2>
            {/* Display user profile information */}
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>
            {/* Add more profile details here */}
          </div>

          {/* Navigation Menu */}
          <nav className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Navigation Menu</h2>
            {/* Add navigation links here */}
            <ul>
              <li><a href="#" className="text-blue-500 hover:underline">Dashboard</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Reservations</a></li>
              {/* Add more navigation links here */}
            </ul>
          </nav>

          {/* Summary Cards */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Summary Cards</h2>
            {/* Add summary cards or widgets here */}
            <p>Total Reservations: 10</p>
            <p>Upcoming Bookings: 3</p>
            {/* Add more summary cards here */}
          </div>
        </div>

        {/* Data Tables or Lists */}
        <div className="bg-white rounded-lg shadow mt-4 p-4">
          <h2 className="text-lg font-semibold mb-2">Past Reservations</h2>
          {/* Add data table or list here */}
          <table className="min-w-full">
            {/* Table header */}
            <thead>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              <tr>
                <td>2022-03-20</td>
                <td>Boating House A</td>
                <td>Completed</td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>

        {/* Graphs or Charts */}
        <div className="bg-white rounded-lg shadow mt-4 p-4">
          <h2 className="text-lg font-semibold mb-2">Activity Chart</h2>
          {/* Add graph or chart here */}
          {/* Example: <LineChart data={activityData} /> */}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-4 space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">New Reservation</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Edit Profile</button>
          {/* Add more action buttons here */}
        </div>

        {/* Notifications or Alerts */}
        <div className="bg-white rounded-lg shadow mt-4 p-4">
          <h2 className="text-lg font-semibold mb-2">Notifications</h2>
          {/* Add notifications or alerts here */}
          <p>No new notifications</p>
        </div>

        {/* Help or Support Section */}
        <div className="bg-white rounded-lg shadow mt-4 p-4">
          <h2 className="text-lg font-semibold mb-2">Help & Support</h2>
          {/* Add help or support information here */}
          <p>If you need assistance, contact us at support@example.com</p>
        </div>
      </main>

      
     
    </div>
  );
}

export default Dashboard;
