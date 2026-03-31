const Step1Role = ({ promptData, setPromptData }) => {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold">
          🎭
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Step 1: Define the AI Role</h2>
          <p className="text-sm text-slate-500">Who do you want the AI to be?</p>
        </div>
      </div>
      
      <input
        type="text"
        placeholder="e.g. Expert React Developer and clean code enthusiast"
        className="w-full p-4 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all duration-300 bg-white/50"
        value={promptData.role}
        onChange={(e) => setPromptData({ ...promptData, role: e.target.value })}
      />
    </div>
  );
};

export default Step1Role;