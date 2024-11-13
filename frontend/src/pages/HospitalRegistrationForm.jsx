import React, { useState } from 'react';

function RegisterHospital() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Simple validation for the sake of this example
    if (!name || !address || !city || !licenseNumber || !contactNumber) {
      setError('Please fill in all the fields');
      return;
    }

    // Call the registration API here (this can be replaced with your API integration)
    // For now, we are just logging the details
    console.log('Hospital Registration:', { name, address, city, licenseNumber, contactNumber });

    // On successful registration (assuming successful registration is based on some condition)
    // Redirect or do further processing here
    setError('');
    alert('Hospital Registered Successfully');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-16">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">Register as a Hospital</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Hospital Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter hospital name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter hospital address"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter city"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="licenseNumber" className="block text-gray-700">License Number</label>
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter license number"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="contactNumber" className="block text-gray-700">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter contact number"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg text-lg hover:bg-red-600"
          >
            Register Hospital
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already registered?{' '}
            <a href="/login-hospital" className="text-red-500 hover:underline">
              Login as a Hospital
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterHospital;
