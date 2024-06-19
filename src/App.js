import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDocument } from 'use-fireproof';
import NavBar from './components/NavBar';
import TopSection from './components/TopSection';
import HabitTable from './components/HabitTable';
import DataPage from './components/DataPage';
import './tailwind.output.css';

const App = () => {
  const [doc, setDoc, saveDoc] = useDocument(() => ({
    habitName: "",
    dates: [],
    type: "good",
    createdAt: new Date().toISOString(),
    targetPerDay: 1,
    target7DayAvg: 0,
    target30DayAvg: 0
  }));

  return (
    <Router>
      <div className="flex min-h-screen">
        <NavBar />
        <div className="flex flex-col flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TopSection setDoc={setDoc} saveDoc={saveDoc} />
                  <div className="flex-grow p-6">
                    <HabitTable saveDoc={saveDoc} />
                  </div>
                </>
              }
            />
            <Route path="/data" element={<DataPage setDoc={setDoc} saveDoc={saveDoc} />} />
            {/* Add routes for Settings and About pages here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
