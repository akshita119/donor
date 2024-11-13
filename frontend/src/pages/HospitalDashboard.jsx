import React from 'react';
import { Link } from 'react-router-dom';

function HospitalDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <section className="bg-[#E63946] text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">Hospital Dashboard</h1>
        <p className="mt-4 text-xl">Manage blood requests and inventory efficiently</p>
      </section>

      {/* Main Content Section */}
      <div className="mt-12 flex flex-col gap-8 w-full max-w-md px-6">
        {/* Request Blood Button */}
        <Link 
          to="/hospital-dashboard/request-blood"
          className="bg-[#E63946] text-white text-center px-6 py-4 rounded-lg text-lg font-semibold hover:bg-[#d82f3e]"
        >
          Request Blood
        </Link>

        {/* View Blood Inventory Button */}
        <Link 
          to="/hospital-dashboard/view-inventory"
          className="bg-[#E63946] text-white text-center px-6 py-4 rounded-lg text-lg font-semibold hover:bg-[#d82f3e]"
        >
          View Blood Inventory
        </Link>

        {/* Manage Requests Button */}
        <Link 
          to="/hospital-dashboard/manage-requests"
          className="bg-[#E63946] text-white text-center px-6 py-4 rounded-lg text-lg font-semibold hover:bg-[#d82f3e]"
        >
          Manage Requests
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#E63946] text-white text-center py-4 mt-auto w-full">
        <p className="text-sm">© 2024 Blood Donation Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HospitalDashboard;
