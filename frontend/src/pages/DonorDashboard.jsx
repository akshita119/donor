import React from 'react';
import DonorProfile from '../components/DonorProfile';
import DonationHistory from '../components/DonationHistory';
import EligibilityChecker from '../components/EligibilityChecker';
import ReminderList from '../components/ReminderList';

const DonorDashboard = () => {
    // Mock data
    const donor = {
        name: 'Akshita Kumari',
        lastDonationDate: '2024-08-20',
        donationType: 'Blood',
    };

    const history = [
        { date: '2024-08-20', type: 'Blood' },
        { date: '2024-05-10', type: 'Platelet' },
    ];

    const nextEligibilityDate = '2024-11-20';
    const reminders = [
        'You can donate blood on 2024-11-20.',
        'Consider platelet donation for faster recovery times.',
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-4">Donor Dashboard</h1>
            <DonorProfile
                name={donor.name}
                lastDonationDate={donor.lastDonationDate}
                donationType={donor.donationType}
            />
            <DonationHistory history={history} />
            <EligibilityChecker nextEligibilityDate={nextEligibilityDate} />
            <ReminderList reminders={reminders} />
        </div>
    );
};

export default DonorDashboard;
