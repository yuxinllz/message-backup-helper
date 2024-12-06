import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import Header from "@/components/Header";
import { ParentProfileForm } from "@/components/profile/ParentProfileForm";
import { ChildProfileForm } from "@/components/profile/ChildProfileForm";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const profileSchema = z.object({
  // Parent Details
  parentName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  parentEmail: z.string().email({ message: "Please enter a valid email address." }),
  
  // Child Details (matching onboarding schema)
  childName: z.string().min(2, { message: "Child name must be at least 2 characters." }),
  childAge: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid age.",
  }),
  location: z.string().min(2, { message: "Location is required" }),
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"], {
    required_error: "Please select a gender",
  }),
  phoneType: z.string().min(2, { message: "Phone type is required" }),
  ageFirstPhone: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Please enter a valid age",
  }),
  messagingApps: z.array(z.string()).min(1, { message: "Select at least one messaging app" }),
  otherMessagingApps: z.string().optional(),
  safetyTools: z.array(z.string()),
  safetyTraining: z.string(),
  hadIncidents: z.enum(["yes", "no"], {
    required_error: "Please indicate if there have been any incidents",
  }),
});

const Profile = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      parentName: "",
      parentEmail: "",
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

  const onSubmit = (values: z.infer<typeof profileSchema>) => {
    console.log(values);
    toast.success("Profile updated successfully!");
  };

  const handleAddNewChild = () => {
    navigate("/onboarding", { state: { startAtChildInfo: true } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Profile Settings</h1>
            <p className="text-joey-muted">Update your account and child information</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <Collapsible className="border rounded-lg">
                  <CollapsibleTrigger className="flex w-full items-center justify-between p-4 font-semibold hover:bg-gray-50">
                    <h2 className="text-2xl">Parent Details</h2>
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 pt-0">
                    <ParentProfileForm form={form} />
                    <Button 
                      type="submit" 
                      className="w-full bg-joey-sage hover:bg-joey-sage/90 mt-4"
                    >
                      Save Changes
                    </Button>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible className="border rounded-lg">
                  <CollapsibleTrigger className="flex w-full items-center justify-between p-4 font-semibold hover:bg-gray-50">
                    <h2 className="text-2xl">Your Kid</h2>
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 pt-0">
                    <ChildProfileForm form={form} />
                    <Button 
                      type="submit" 
                      className="w-full bg-joey-sage hover:bg-joey-sage/90 mt-4"
                    >
                      Save Changes
                    </Button>
                  </CollapsibleContent>
                </Collapsible>

                <div className="flex flex-col gap-4">
                  <Button
                    type="button"
                    onClick={handleAddNewChild}
                    className="w-full bg-joey-sage hover:bg-joey-sage/90 flex items-center justify-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add New Child
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Profile;