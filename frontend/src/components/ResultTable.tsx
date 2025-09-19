import React from "react";

interface ResultTableProps {
  data: Record<string, string>;
  title: string;
}

const ResultTable: React.FC<ResultTableProps> = ({ data, title }) => {
  if (!data || Object.keys(data).length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100 text-center">
        {title}
      </h2>

      {/* Card Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow"
          >
            {/* Key */}
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wide">
              {formatKey(key)}
            </p>
            {/* Value */}
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 break-words">
              {value || "—"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// helper to make keys human-readable
const formatKey = (key: string) => {
  return key
    .replace(/([A-Z])/g, " $1") // split camelCase
    .replace(/_/g, " ") // replace underscores
    .replace(/\b\w/g, (c) => c.toUpperCase()) // capitalize words
    .trim();
};

export default ResultTable;
