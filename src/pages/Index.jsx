import { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Step from "@/components/Step";
import { steps } from "@/data/steps";

const Index = () => {
  const [platform, setPlatform] = useState("macos");
  const [currentStep, setCurrentStep] = useState(0);
  const stepsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      stepsRef.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.3) {
            setCurrentStep(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-4xl mx-auto py-4 px-4">
          <Tabs defaultValue="macos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
              <TabsTrigger value="macos" onClick={() => setPlatform("macos")}>
                macOS
              </TabsTrigger>
              <TabsTrigger value="windows" onClick={() => setPlatform("windows")}>
                Windows
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              iTunes Backup Instructions
            </h1>
            <p className="text-xl text-gray-600">
              Follow these steps to locate and upload your iTunes backup file
            </p>
          </div>

          <div className="space-y-[100vh] pb-[50vh] snap-y snap-mandatory">
            {steps.map((step, index) => (
              <div key={index} ref={(el) => (stepsRef.current[index] = el)}>
                <Step
                  step={step}
                  index={index}
                  platform={platform}
                  isActive={currentStep === index}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Troubleshooting Tips
            </h2>
            <ul className="space-y-2 text-blue-800">
              <li>
                • File not found? Ensure you are looking in the correct backup
                folder for the most recent modification date.
              </li>
              <li>
                • Encrypted backups? Turn off encryption in iTunes, back up your
                device again, and repeat the steps.
              </li>
              <li>• Need help? Contact our support team.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;