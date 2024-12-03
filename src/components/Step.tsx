import React from 'react';

interface StepProps {
  title: string;
  content: React.ReactNode;
  platform?: string;
}

const Step: React.FC<StepProps> = ({ title, content, platform }) => {
  return (
    <div className="min-h-screen flex items-center justify-center snap-start">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        {platform && (
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-joey-sage bg-joey-warm rounded-full">
            {platform}
          </span>
        )}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="prose max-w-none">{content}</div>
      </div>
    </div>
  );
};

export default Step;