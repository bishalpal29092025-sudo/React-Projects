const ProgressBar = ({ currentStep }) => {
  const steps = [1, 2, 3];
  return (
    <div className="flex justify-between items-center mb-10 max-w-sm mx-auto relative">
      {steps.map((step) => (
        <div key={step} className="flex items-center flex-1 last:flex-none relative z-10">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-2xl font-bold transition-all duration-500 transform ${
              currentStep >= step
                ? "bg-gradient-to-br from-indigo-600 to-violet-600 text-white scale-110 shadow-lg shadow-indigo-200 rotate-3"
                : "bg-white text-slate-400 border-2 border-slate-100"
            }`}
          >
            {step}
          </div>
          {step < 3 && (
            <div className="h-1.5 flex-1 mx-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-700 ease-in-out ${
                  currentStep > step ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;