import React, { useState } from "react";
//import { useDocument } from 'use-fireproof';

const TopSection = ({ setDoc, saveDoc }) => {
  const [newHabit, setNewHabit] = useState("");
  const [habitType, setHabitType] = useState("good");
  const [dailyTargetPerDay, setDailyTargetPerDay] = useState(1);
  const [dailyTarget7DayAvg, setDailyTarget7DayAvg] = useState(0);
  const [dailyTarget30DayAvg, setDailyTarget30DayAvg] = useState(0);

  const handleAddHabit = (e) => {
    e.preventDefault();
    saveDoc({
      habitName: newHabit,
      dates: [],
      targetPerDay: dailyTargetPerDay,
      type: habitType,
      createdAt: new Date().toISOString(),
      target7DayAvg: dailyTarget7DayAvg,
      target30DayAvg: dailyTarget30DayAvg
    });
    setNewHabit("");
    setHabitType("good");
    setDailyTargetPerDay(1);
    setDailyTarget7DayAvg(0);
    setDailyTarget30DayAvg(0);
  };

  return (
    <div className="w-full bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Habit Tracker</h1>
      <form onSubmit={handleAddHabit} className="w-full max-w-lg mb-8">
        <div className="flex flex-col border-b border-blue-900 py-2">
          <div className="flex mb-2">
            <label className="mr-4">
              <input
                type="radio"
                value="good"
                checked={habitType === "good"}
                onChange={(e) => setHabitType(e.target.value)}
                className="mr-1"
              />
              Good Habit
            </label>
            <label className="mr-4">
              <input
                type="radio"
                value="bad"
                checked={habitType === "bad"}
                onChange={(e) => setHabitType(e.target.value)}
                className="mr-1"
              />
              Bad Habit
            </label>
          </div>
          <input
            type="text"
            className="none bg-transparent border w-full text-gray-700 py-1 leading-tight focus:outline-none mb-4"
            placeholder="Enter new habit..."
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
          />
          <h3 className="font-bold px-2">Targets</h3>
          <div className="border p-2">
            <div className="flex mb-2">
              <label className="w-full text-gray-700 mb-2">Daily</label>
              <input
                type="number"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none mb-2"
                placeholder="Target number of times per day..."
                value={dailyTargetPerDay}
                onChange={(e) => setDailyTargetPerDay(e.target.value)}
              />
            </div>
            <div className="flex mb-2">
              <label className="w-full text-gray-700 mb-2">Weekly Avg</label>
              <input
                type="number"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none mb-2"
                placeholder="Target for 7 Day Average..."
                value={dailyTarget7DayAvg}
                onChange={(e) => setDailyTarget7DayAvg(e.target.value)}
              />
            </div>
            <div className="flex">
              <label className="w-full text-gray-700">Monthly Avg</label>
              <input
                type="number"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none mb-2"
                placeholder="Target for 30 Day Average..."
                value={dailyTarget30DayAvg}
                onChange={(e) => setDailyTarget30DayAvg(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center py-2">
            <button
              type="submit"
              className="flex-shrink-0 bg-blue-900 hover:bg-blue-500 border-blue-900 hover:border-blue-500 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Add Habit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TopSection;
