// Shortlist.js

import React, { useState } from 'react';

function Shortlist() {
  const [shortlistedStudents, setShortlistedStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com' },
  ]);

  const handleDelete = (id) => {
    // Logic to delete shortlisted student with given id
    const updatedShortlistedStudents = shortlistedStudents.filter(student => student.id !== id);
    setShortlistedStudents(updatedShortlistedStudents);
  };

  const handleView = (id) => {
    // Logic to view details of shortlisted student with given id
    console.log(`Viewing details of student with id ${id}`);
  };

  return (
    <div className="pl-2 ">

      <h2 className="font-bold text-xl mb-4 text-black ">Shortlisted Students</h2>
      
      <table className="w-full border-collapse border border-slate-400 mx-1 ">
        <thead>
          <tr className='text-lg'>
            <th className='border border-slate-300 bg-slate-200'>Name</th>
            <th className='border border-slate-300 bg-slate-200'>Email</th>
            <th className='border border-slate-300 bg-slate-200'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shortlistedStudents.map(student => (
            <tr key={student.id}>
              <td className='border border-slate-300 px-2'>{student.name}</td>
              <td className='border border-slate-300 px-2'>{student.email}</td>
              <td className="border border-slate-300">
                <button className="bg-red-500 text-white m-2 border rounded px-2" onClick={() => handleDelete(student.id)}>Delete</button>
                <button className="bg-blue-700 text-white m-2 border rounded px-2" onClick={() => handleView(student.id)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Shortlist;