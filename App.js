import React from 'react';
import DriveStatus from './components/DriveStatus';
import DriveUpdate from './components/DriveUpdate';
import StudentProgress from './components/StudentProgress';
import Shortlist from './components/Shortlist';
import './App.css';

function App() {
  return (
    <div className="px-14 pt-20 bg-slate-50 max-w-screen mx-auto">
      <div className='text-3xl font-bold tracking-normal text-left mb-5'>TPO Drive Tracker</div>
      <hr className='m-4' />
      <DriveStatus />
      <hr className='m-4'/>
      <DriveUpdate />
      <hr className='m-4'/>
      <Shortlist />
      <hr className='m-4'/>
      <StudentProgress />
      
    </div>
  );
}

export default App;