import React, { useState } from 'react';

const HospitalDashboard = () => {
  const [bloodRequest, setBloodRequest] = useState({
    bloodType: '',
    quantity: '',
  });

  const [inventory, setInventory] = useState([
    { bloodType: 'A+', quantity: 10 },
    { bloodType: 'B+', quantity: 5 },
    { bloodType: 'O+', quantity: 8 },
    { bloodType: 'AB+', quantity: 3 },
  ]);

  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, hospitalName: 'XYZ Hospital', bloodType: 'A+', quantity: 3, status: 'Pending' },
    { id: 2, hospitalName: 'ABC Hospital', bloodType: 'O+', quantity: 5, status: 'Pending' },
  ]);

  const handleRequestChange = (e) => {
    const { name, value } = e.target;
    setBloodRequest((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    if (bloodRequest.bloodType && bloodRequest.quantity) {
      // Add the new request to pending requests
      setPendingRequests([...pendingRequests, {
        id: pendingRequests.length + 1,
        hospitalName: 'Current Hospital', // Replace with dynamic hospital name if needed
        bloodType: bloodRequest.bloodType,
        quantity: parseInt(bloodRequest.quantity),
        status: 'Pending',
      }]);
      setBloodRequest({ bloodType: '', quantity: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <section className="bg-[#E63946] text-white text-center py-16">
        <h1 className="text-4xl font-bold">Hospital Dashboard</h1>
        <p className="mt-4 text-xl">Manage your blood requests and track inventory.</p>
      </section>

      {/* Request Blood Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-center text-[#E63946] mb-6">Request Blood</h2>
        
        <form onSubmit={handleRequestSubmit} className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="bloodType" className="block text-lg font-medium text-gray-700">Blood Type</label>
            <select
              id="bloodType"
              name="bloodType"
              value={bloodRequest.bloodType}
              onChange={handleRequestChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-lg font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={bloodRequest.quantity}
              onChange={handleRequestChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter quantity"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#E63946] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#D62828]"
            >
              Request Blood
            </button>
          </div>
        </form>
      </section>

      {/* Inventory Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center text-[#E63946] mb-6">Blood Inventory</h2>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <table className="w-full table-auto text-center">
            <thead>
              <tr className="bg-[#E63946] text-white">
                <th className="px-4 py-2">Blood Type</th>
                <th className="px-4 py-2">Quantity Available</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.bloodType}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pending Requests Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-center text-[#E63946] mb-6">Pending Blood Requests</h2>
        <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
          <table className="w-full table-auto text-center">
            <thead>
              <tr className="bg-[#E63946] text-white">
                <th className="px-4 py-2">Hospital Name</th>
                <th className="px-4 py-2">Blood Type</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {pendingRequests.map((request) => (
                <tr key={request.id}>
                  <td className="border px-4 py-2">{request.hospitalName}</td>
                  <td className="border px-4 py-2">{request.bloodType}</td>
                  <td className="border px-4 py-2">{request.quantity}</td>
                  <td className="border px-4 py-2">{request.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default HospitalDashboard;
