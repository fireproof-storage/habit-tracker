import React from 'react';
import { useLiveQuery } from 'use-fireproof';

const DataPage = ({ setDoc, saveDoc }) => {
  const { docs: documents = [], loading, error } = useLiveQuery("habitName", { limit: 100 });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading documents: {error.message}</div>;
  }

  return (
    <div className="w-full bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Data  Page</h1>
      <div className="flex flex-col border-t border-blue-900 py-2">
        <ul>
          {documents.map((doc) => (
            <li key={doc._id}>
              <pre>{JSON.stringify(doc, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataPage;

