const PromptOutput = ({ promptData }) => {
  const generatePrompt = () => {
    let prompt = `Act as a ${promptData.role || "[Role]"}.\n\n`;
    prompt += `Context:\n${promptData.context || "[Context]"}\n\n`;
    
    if (promptData.constraints.length > 0) {
      prompt += `Constraints:\n`;
      promptData.constraints.forEach((c) => {
        prompt += `- ${c}\n`;
      });
    }
    return prompt;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatePrompt());
    alert("Prompt copied to clipboard! 📋");
  };

  return (
    <div className="mt-6 p-5 bg-slate-900 text-slate-100 rounded-2xl font-mono text-sm relative animate-fadeIn border border-slate-800 shadow-2xl">
      <div className="flex justify-between items-center mb-3 border-b border-slate-800 pb-3">
        <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">Generated Output</span>
        <button
          onClick={copyToClipboard}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-lg transition-all"
        >
          Copy Prompt
        </button>
      </div>
      <pre className="whitespace-pre-wrap leading-relaxed text-emerald-400">{generatePrompt()}</pre>
    </div>
  );
};

export default PromptOutput;