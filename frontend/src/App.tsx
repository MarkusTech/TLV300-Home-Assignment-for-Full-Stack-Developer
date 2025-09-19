import { useState } from "react";
import axios from "axios";
import DomainForm from "./components/DomainForm";
import ResultTable from "./components/ResultTable";

function App() {
  const [result, setResult] = useState<Record<string, string> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLookup = async (domain: string, type: "domain" | "contact") => {
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/whois", {
        domain,
        type,
      });
      setResult(res.data);
    } catch {
      setError("Failed to fetch WHOIS data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex items-center justify-center">
      {/* Full screen container */}
      <div className="w-full flex flex-col items-center px-6 mt-6 sm:mt-10 md:mt-16">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-10 text-center">
          WHOIS Lookup Tool
        </h1>

        {/* WHOIS Form */}
        <div className="w-full max-w-lg">
          <DomainForm onSubmit={handleLookup} />
        </div>

        {/* Loader / Error / Result */}
        {loading && (
          <p className="mt-6 text-blue-600 font-medium dark:text-blue-400 text-center">
            Fetching WHOIS data...
          </p>
        )}

        {error && (
          <p className="mt-6 text-red-600 font-medium bg-red-100 dark:bg-red-800 dark:text-red-200 p-3 rounded text-center w-full max-w-2xl">
            {error}
          </p>
        )}

        {result && (
          <div className="mt-8 w-full max-w-4xl">
            <ResultTable data={result} title="WHOIS Lookup Result" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
