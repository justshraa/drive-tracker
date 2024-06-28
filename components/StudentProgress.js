// StudentProgress.js

import React, { useState } from 'react';


const StudentProgress = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', round1: false, round2: false, round3: true },
    { id: 2, name: 'Jane Smith', round1: true, round2: true, round3: false },
    { id: 3, name: 'Michael Johnson', round1: false, round2: true, round3: true },
    // Add more students as needed
  ]);

  const handleCheckboxChange = (studentId, roundName) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        return { ...student, [roundName]: !student[roundName] };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  return (
    <div className="pl-2 mb-14">
      <h2 className='font-bold text-xl mb-4 text-black'>Student Progress</h2>
      <table className="w-full border-collapse border border-slate-400 mx-1">
        <thead>
          <tr className='text-lg border border-slate-300 bg-slate-200' >
            <th className='border border-slate-300 bg-slate-200'>Student Name</th>
            <th className='border border-slate-300 bg-slate-200'>Round 1</th>
            <th className='border border-slate-300 bg-slate-200'>Round 2</th>
            <th className='border border-slate-300 bg-slate-200'>Round 3</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td className='border border-slate-300  p-2 '>{student.name}</td>
              <td className='border border-slate-300 p-2'>
                <input
                  
                  type="checkbox"
                  checked={student.round1}
                  onChange={() => handleCheckboxChange(student.id, 'round1')}
                />
                <span className="status">{student.round1 ? 'Cleared' : 'Not Cleared'}</span>
              </td>
              <td className='border border-slate-300 p-2 '>
                <input
                  type="checkbox"
                  checked={student.round2}
                  onChange={() => handleCheckboxChange(student.id, 'round2')}
                />
                <span className="status">{student.round2 ? 'Cleared' : 'Not Cleared'}</span>
              </td>
              <td className='border border-slate-300 p-2'>
                <input
                  type="checkbox"
                  checked={student.round3}
                  onChange={() => handleCheckboxChange(student.id, 'round3')}
                />
                <span className="status">{student.round3 ? 'Cleared' : 'Not Cleared'}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentProgress;