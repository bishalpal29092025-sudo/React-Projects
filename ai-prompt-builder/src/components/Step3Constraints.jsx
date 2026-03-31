import { useState } from "react";

const Step3Constraints = ({ promptData, setPromptData }) => {
  const [newConstraint, setNewConstraint] = useState("");

  const addConstraint = () => {
    if (!newConstraint.trim()) return;
    setPromptData({
      ...promptData,
      constraints: [...promptData.constraints, newConstraint.trim()],
    });
    setNewConstraint("");
  };

  const removeConstraint = (index) => {
    setPromptData({
      ...promptData,
      constraints: promptData.constraints.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center font-bold">
          🛑
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800 ">Step 3: Add Constraints</h2>
          <p className="text-sm text-slate-500">What rules must the AI follow?</p>
        </div>
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="e.g. Do not use external libraries"
          className="flex-1 p-4 border border-slate-200 rounded-xl focus:ring-4 focus:ring-rose-100 focus:border-rose-500 outline-none transition-all duration-300 bg-white/50"
          value={newConstraint}
          onChange={(e) => setNewConstraint(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addConstraint()}
        />
        <button
          onClick={addConstraint}
          className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-rose-100"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2 mt-4 max-h-48 overflow-y-auto pr-2">
        {promptData.constraints.map((item, index) => (
          <li key={index} className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-blue-50 p-3 rounded-xl border border-blue-100 group transition-all hover:shadow-md animate-scaleIn">
            <span className="text-indigo-900 font-medium text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              {item}
            </span>
            <button
              onClick={() => removeConstraint(index)}
              className="text-slate-400 hover:text-rose-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Step3Constraints;