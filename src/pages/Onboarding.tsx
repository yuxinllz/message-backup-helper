import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ParentInformationForm } from "@/components/onboarding/ParentInformationForm";
import { ChildInformationForm } from "@/components/onboarding/ChildInformationForm";
import { DeviceUsageForm } from "@/components/onboarding/DeviceUsageForm";
import { SafetyInformationForm } from "@/components/onboarding/SafetyInformationForm";

const formSchema = z.object({
  // Parent Details
  parentName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  parentAge: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid age.",
  }),
  parentGender: z.enum(["male", "female", "other", "prefer-not-to-say"], {
    required_error: "Please select a gender",
  }),
  parentCity: z.string().min(2, { message: "City is required" }),
  parentCountry: z.string().min(2, { message: "Country is required" }),
  parentPhone: z.string().min(10, { message: "Please enter a valid phone number" }),
  parentEmail: z.string().email({ message: "Please enter a valid email address" }),
  numberOfChildren: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid number of children",
  }),

  // Child Details
  childName: z.string().min(2, { message: "Child name must be at least 2 characters." }),
  childAge: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid age.",
  }),
  location: z.string().min(2, { message: "Location is required" }),
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"], {
    required_error: "Please select a gender",
  }),

  // Device Usage
  phoneType: z.string().min(2, { message: "Phone type is required" }),
  ageFirstPhone: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Please enter a valid age",
  }),
  messagingApps: z.array(z.string()).min(1, { message: "Select at least one messaging app" }),
  otherMessagingApps: z.string().optional(),

  // Safety Information
  safetyTools: z.array(z.string()),
  safetyTraining: z.string(),
  hadIncidents: z.enum(["yes", "no"], {
    required_error: "Please indicate if there have been any incidents",
  }),
});

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      parentAge: "",
      parentGender: undefined,
      parentCity: "",
      parentCountry: "",
      parentPhone: "",
      parentEmail: "",
      numberOfChildren: "",
      childName: "",
      childAge: "",
      location: "",
      gender: undefined,
      phoneType: "",
      ageFirstPhone: "",
      messagingApps: [],
      otherMessagingApps: "",
      safetyTools: [],
      safetyTraining: "",
      hadIncidents: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Onboarding completed successfully!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-joey-warm p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-3">
            <Shield className="w-12 h-12 text-joey-sage" />
            <span className="text-3xl font-semibold bg-gradient-to-r from-joey-sage to-joey-accent bg-clip-text text-transparent">
              Joey
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Welcome to Joey</h1>
          <p className="text-lg text-joey-muted">
            Let's set up your account in four simple steps
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex-1 border-b-4 mx-2 ${
                  currentStep === step ? "border-joey-sage" : "border-gray-200"
                }`}
              >
                <span className="block text-center mb-2">
                  {step === 1 && "Parent Information"}
                  {step === 2 && "Child Information"}
                  {step === 3 && "Device Usage"}
                  {step === 4 && "Safety Information"}
                </span>
              </div>
            ))}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {currentStep === 1 && <ParentInformationForm form={form} />}
              {currentStep === 2 && <ChildInformationForm form={form} />}
              {currentStep === 3 && <DeviceUsageForm form={form} />}
              {currentStep === 4 && <SafetyInformationForm form={form} />}

              <div className="flex justify-between pt-4">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                  >
                    Previous
                  </Button>
                )}
                {currentStep < 4 ? (
                  <Button
                    type="button"
                    className="ml-auto bg-joey-sage hover:bg-joey-sage/90"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                  >
                    Next
                  </Button>
                ) : (
                  <Button type="submit" className="ml-auto bg-joey-sage hover:bg-joey-sage/90">
                    Complete Setup
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;