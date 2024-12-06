import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

const messagingApps = [
  { id: "imessages", label: "iMessages" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "snapchat", label: "Snapchat" },
  { id: "messenger", label: "Messenger" },
  { id: "discord", label: "Discord" },
];

const safetyTools = [
  { id: "parental-controls", label: "Parental Controls" },
  { id: "monitoring-apps", label: "Monitoring Apps" },
  { id: "content-filters", label: "Content Filters" },
  { id: "time-limits", label: "Time Limits" },
];

export const ChildProfileForm = ({ form }: { form: UseFormReturn<any> }) => {
  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="childName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Child's Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter child's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="childAge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Child's Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter child's age" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter your location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel className="font-normal">Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="other" />
                    </FormControl>
                    <FormLabel className="font-normal">Other</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="prefer-not-to-say" />
                    </FormControl>
                    <FormLabel className="font-normal">Prefer not to say</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Device Usage */}
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="phoneType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Phone</FormLabel>
              <FormControl>
                <Input placeholder="e.g., iPhone 13, Samsung Galaxy" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="ageFirstPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age When First Given a Phone</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter age" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="messagingApps"
          render={() => (
            <FormItem>
              <FormLabel>Messaging Apps Used</FormLabel>
              <div className="grid grid-cols-2 gap-4">
                {messagingApps.map((app) => (
                  <FormField
                    key={app.id}
                    control={form.control}
                    name="messagingApps"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={app.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(app.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, app.id])
                                  : field.onChange(
                                      field.value?.filter((value: string) => value !== app.id)
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{app.label}</FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="otherMessagingApps"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Messaging Apps</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Please list any other messaging apps your child uses"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Safety Information */}
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="safetyTools"
          render={() => (
            <FormItem>
              <FormLabel>Online Safety Tools Used</FormLabel>
              <div className="grid grid-cols-2 gap-4">
                {safetyTools.map((tool) => (
                  <FormField
                    key={tool.id}
                    control={form.control}
                    name="safetyTools"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={tool.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(tool.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, tool.id])
                                  : field.onChange(
                                      field.value?.filter((value: string) => value !== tool.id)
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{tool.label}</FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="safetyTraining"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cyber Safety Training Experience</FormLabel>
              <FormControl>
                <Input
                  placeholder="Describe any cyber safety training you've had"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="hadIncidents"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Has your child experienced any online incidents?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};