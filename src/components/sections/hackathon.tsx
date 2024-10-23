import React from 'react';
import { FaRocket, FaClock, FaTrophy, FaCalendarAlt, FaUsers, FaFileAlt } from 'react-icons/fa';

const Hackathon= () => {
  const events = [
    { title: 'Applications Open', date: '26th October 2024', icon: <FaCalendarAlt /> },
    { title: 'Hackathon Kick-off', date: '9th Nov, 11:00 AM', icon: <FaRocket /> },
    { title: 'Hackathon Starts', date: '9th Nov, 12:00 PM', icon: <FaClock /> },
    { title: 'Mentorship Round 1', date: '9th Nov, 5:00 PM', icon: <FaUsers /> },
    { title: 'Mentorship Round 2', date: '10th Nov, 9:00 AM', icon: <FaUsers /> },
    { title: 'Final Submission', date: '10th Nov, 12:00 PM', icon: <FaFileAlt /> },
    { title: 'Winner Announcement', date: '10th Nov, 2:45 PM', icon: <FaTrophy /> },
  ];

  return (
    <div className="mt-8 bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))] text-white min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-16">Hackathon Timeline</h1>
      <div className="max-w-4xl mx-auto">
        <ol className="relative border-l-2 border-gray-700">
          {events.map((event, index) => (
            <li key={index} className="mb-10 ml-6 flex items-center animate-fade-in-up">
              {/* Centered icon on the vertical line */}
              <span className="flex absolute -left-6 justify-center items-center w-12 h-12 bg-blue-600 rounded-full ring-4 ring-gray-900 transition-transform duration-500 ease-in-out hover:scale-125">
                {event.icon}
              </span>
              {/* Event box aligned to the right */}
              <div className="bg-gray-800 p-6 w-80 ml-8 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <time className="block mt-2 text-sm text-gray-400">{event.date}</time>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </div>
  );
};



export default Hackathon;
