import { useState } from "react";

interface DomainFormProps {
  onSubmit: (domain: string, type: "domain" | "contact") => void;
}

export default function DomainForm({ onSubmit }: DomainFormProps) {
  const [domain, setDomain] = useState("");
  const [type, setType] = useState<"domain" | "contact">("domain");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;
    onSubmit(domain, type);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6 w-full"
    >
      <input
        type="text"
        placeholder="Enter domain (e.g. amazon.com)"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="w-full border rounded-md p-3 text-lg text-black dark:text-white dark:bg-gray-700"
      />

      <div className="flex gap-6 text-black dark:text-white">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="domain"
            checked={type === "domain"}
            onChange={() => setType("domain")}
          />
          Domain Info
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="contact"
            checked={type === "contact"}
            onChange={() => setType("contact")}
          />
          Contact Info
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 text-lg rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Lookup
      </button>
    </form>
  );
}
