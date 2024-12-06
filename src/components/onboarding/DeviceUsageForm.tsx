import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const messagingApps = [
  { id: "imessages", label: "iMessages" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "snapchat", label: "Snapchat" },
  { id: "messenger", label: "Messenger" },
  { id: "discord", label: "Discord" },
];

export const DeviceUsageForm = ({ form }: { form: UseFormReturn<any> }) => {
  return (
    <div className="space-y-4 animate-fade-up">
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
  );
};