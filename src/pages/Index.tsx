import React, { useState } from 'react';
import Header from "../components/Header";
import Step from "../components/Step";
import { steps } from "../data/steps";

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<'macOS' | 'Windows'>('macOS');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="fixed top-20 left-0 right-0 z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setSelectedPlatform('macOS')}
              className={`px-4 py-2 rounded-lg ${
                selectedPlatform === 'macOS'
                  ? 'bg-joey-warm text-joey-sage'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              macOS
            </button>
            <button
              onClick={() => setSelectedPlatform('Windows')}
              className={`px-4 py-2 rounded-lg ${
                selectedPlatform === 'Windows'
                  ? 'bg-joey-warm text-joey-sage'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Windows
            </button>
          </div>
        </div>
      </div>

      <div className="pt-36 h-screen overflow-y-auto snap-y snap-mandatory">
        {steps.map((step, index) => {
          // Skip platform-specific steps that don't match the selected platform
          if (step.platform && step.platform !== selectedPlatform) {
            return null;
          }
          
          return (
            <Step
              key={`${step.title}-${index}`}
              title={step.title}
              content={step.content}
              platform={step.platform}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;