interface ResultTableProps {
  data: Record<string, string>;
  title: string;
}

const ResultTable: React.FC<ResultTableProps> = ({ data, title }) => {
  if (!data || Object.keys(data).length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-5xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 text-center">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
          <tbody>
            {Object.entries(data).map(([key, value]) => (
              <tr
                key={key}
                className="border-t border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {/* Left column (label) */}
                <td className="px-6 py-3 font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 w-1/3">
                  {formatKey(key)}
                </td>
                {/* Right column (value) */}
                <td className="px-6 py-3 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 break-words">
                  {value || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
