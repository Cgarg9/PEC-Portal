import React, { useState } from 'react';

const Sidebar = ({ users, onUserClick }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter users based on search term
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-200 h-full p-4">
            <h2 className="text-lg font-semibold mb-4">Users</h2>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search users..."
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
            <div>
                {filteredUsers.map((user, index) => (
                    <div
                        key={index}
                        onClick={() => onUserClick(user.id)}
                        className="cursor-pointer p-2 mb-2 bg-white rounded-md shadow-md hover:bg-gray-100 transition duration-300"
                    >
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
