// components/Detector.tsx
import { useState } from 'react';

export default function Detector() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const checkText = () => {
    setLoading(true);
    setTimeout(() => {
      // Fake AI detection result for demo
      const aiPercentage = Math.floor(Math.random() * 100);
      setResult(`⚠️ ${aiPercentage}% likely written by AI`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-xl">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg text-lg resize-none mb-4"
        rows={8}
        placeholder="Paste your text here to check for AI"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={checkText}
        disabled={!input || loading}
      >
        {loading ? 'Checking...' : 'Check for AI'}
      </button>

      {result && (
        <div className="mt-4 text-xl font-medium text-center text-gray-700">
          {result}
        </div>
      )}
    </div>
  );
}
