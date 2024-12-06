import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";

const safetyTools = [
  { id: "parental-controls", label: "Parental Controls" },
  { id: "monitoring-apps", label: "Monitoring Apps" },
  { id: "content-filters", label: "Content Filters" },
  { id: "time-limits", label: "Time Limits" },
];

export const SafetyInformationForm = ({ form }: { form: UseFormReturn<any> }) => {
  return (
    <div className="space-y-4 animate-fade-up">
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
  );
};