interface ResultTableProps {
  data: Record<string, string>;
  title: string;
}

export default function ResultTable({ data, title }: ResultTableProps) {
  if (!data || Object.keys(data).length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-600">
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr
              key={key}
              className="border-t border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="px-6 py-3 font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 w-1/4">
                {key}
              </td>
              <td className="px-6 py-3 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                {value || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
