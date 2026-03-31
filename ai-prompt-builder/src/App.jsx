import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Step1Role from "./components/Step1Role";
import Step2Context from "./components/Step2Context";
import Step3Constraints from "./components/Step3Constraints";
import ProgressBar from "./components/ProgressBar";
import PromptOutput from "./components/PromptOutput";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const [promptData, setPromptData] = useLocalStorage("ai-prompt", {
    role: "",
    context: "",
    constraints: [],
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-50 to-rose-200 flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-xl">
        <div className="text-center mb-8">
          <span className="bg-white/60 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/50 shadow-sm">
            AI Productivity
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-3 mb-2 tracking-tight">AI Prompt Builder</h1>
          <p className="text-slate-600 font-medium">Craft highly specific prompts step-by-step</p>
        </div>
        
        <ProgressBar currentStep={currentStep} />
        
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl shadow-indigo-100/50 border border-white/50 transition-all duration-500">
          <div className="min-h-[200px]">
            {currentStep === 1 && (
              <Step1Role promptData={promptData} setPromptData={setPromptData} />
            )}
            {currentStep === 2 && (
              <Step2Context promptData={promptData} setPromptData={setPromptData} />
            )}
            {currentStep === 3 && (
              <Step3Constraints promptData={promptData} setPromptData={setPromptData} />
            )}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
            <button 
              onClick={prevStep} 
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                currentStep === 1 
                  ? "opacity-0 cursor-default" 
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm"
              }`}
              disabled={currentStep === 1}
            >
              Back
            </button>
            
            {currentStep < 3 ? (
              <button 
                onClick={nextStep} 
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-indigo-200"
              >
                Next Step
              </button>
            ) : (
              <div className="text-sm font-bold text-emerald-600 flex items-center bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                ✨ Prompt Ready!
              </div>
            )}
          </div>
        </div>

        {currentStep === 3 && <PromptOutput promptData={promptData} />}
      </div>
    </div>
  );
};

export default App;