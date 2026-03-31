const Step2Context = ({ promptData, setPromptData }) => {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center font-bold">
          📝
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Step 2: Provide Context</h2>
          <p className="text-sm text-slate-500">What is the background situation or task?</p>
        </div>
      </div>
      
      <textarea
        rows="5"
        placeholder="e.g. I am building a SaaS dashboard and need a reusable table component that supports sorting."
        className="w-full p-4 border border-slate-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 outline-none transition-all duration-300 bg-white/50"
        value={promptData.context}
        onChange={(e) => setPromptData({ ...promptData, context: e.target.value })}
      />
    </div>
  );
};

export default Step2Context;
