import React from "react";
import { useLiveQuery } from 'use-fireproof';

const HabitTable = ({ saveDoc }) => {
  const result = useLiveQuery("habitName", { limit: 100 });
  const habits = result?.docs || [];

  const today = new Date().toISOString().split("T")[0];
  const handleMarkComplete = (habit) => {
    habit.dates.push(today);
    saveDoc(habit);
  };

  const calculateAverage = (dates, days) => {
    const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const filteredDates = dates.filter(date => date >= cutoff);
    return (filteredDates.length / days).toFixed(2);
  };

  const getColorClass = (type, count, target) => {
    if (type === "good") {
      if (count >= target) return "bg-green-200";
      if (count >= 0.8 * target) return "bg-yellow-200";
      if (count >= 0.5 * target) return "bg-orange-200";
      return "bg-red-200";
    } else {
      if (count <= target) return "bg-green-200";
      if (count <= 1.2 * target) return "bg-yellow-200";
      if (count <= 1.5 * target) return "bg-orange-200";
      return "bg-red-200";
    }
  };

  return (
    <div className="w-full flex flex-col">
      {['good', 'bad'].map((type) => (
        <div key={type} className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{type === 'good' ? 'Good Habits' : 'Bad Habits'}</h2>
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th className="text-left py-2 px-4 bg-gray-100">Created</th>
                <th className="text-left py-2 px-4 bg-gray-100">Habit Name</th>
                <th className="text-left py-2 px-4 bg-gray-100">Increment</th>
                <th className="text-left py-2 px-4 bg-gray-100">Today</th>
                <th className="text-left py-2 px-4 bg-gray-100">Yesterday</th>
                <th className="text-left py-2 px-4 bg-gray-100">Weekly Avg</th>
                <th className="text-left py-2 px-4 bg-gray-100">Monthly Avg</th>
                <th className="text-left py-2 px-4 bg-gray-100">Daily Target</th>
                <th className="text-left py-2 px-4 bg-gray-100">Weekly Target</th>
                <th className="text-left py-2 px-4 bg-gray-100">Monthly Target</th>
              </tr>
            </thead>
            <tbody>
              {habits.filter(habit => habit.type === type).map((habit) => {
                const timesToday = habit.dates.filter(date => date === today).length;
                const timesYesterday = habit.dates.filter(date => date === new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split("T")[0]).length;
                const avg7Days = calculateAverage(habit.dates, 7);
                const avg30Days = calculateAverage(habit.dates, 30);
                console.log("7 day avg:", Number(avg7Days).toFixed(3), "target:", Number(habit.target7DayAvg).toFixed(3), "30 day avg:", Number(avg30Days).toFixed(3), "target:", Number(habit.target30DayAvg).toFixed(3));
                return (
                  <tr key={habit._id} className="hover:bg-gray-100">
                    <td className="py-2 px-4">{new Date(habit.createdAt).toLocaleString()}</td>
                    <td className="py-2 px-4">{habit.habitName}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleMarkComplete(habit)}
                        className="bg-blue-900 hover:bg-blue-500 text-white font-semibold py-1 px-3 rounded"
                      >
                        !
                      </button>
                    </td>
                    <td className={`py-2 px-4 ${getColorClass(type, timesToday, habit.targetPerDay)}`}>{timesToday}</td>
                    <td className={`py-2 px-4 ${getColorClass(type, timesYesterday, habit.targetPerDay)}`}>{timesYesterday}</td>
                    <td className={`py-2 px-4 ${getColorClass(type, avg7Days, habit.target7DayAvg)}`}>{avg7Days}</td>
                    <td className={`py-2 px-4 ${getColorClass(type, avg30Days, habit.target30DayAvg)}`}>{avg30Days}</td>
                    <td className="py-2 px-4">{habit.targetPerDay}</td>
                    <td className="py-2 px-4">{habit.target7DayAvg}</td>
                    <td className="py-2 px-4">{habit.target30DayAvg}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default HabitTable;

