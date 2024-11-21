import { useState } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [platform, setPlatform] = useState("macos");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const steps = [
    {
      title: "Locate Your iTunes Backup",
      description: "Navigate to your iTunes backup folder",
      content: {
        macos: {
          path: "~/Library/Application Support/MobileSync/Backup/",
          instructions: [
            "Open Finder and go to the menu bar.",
            "Select Go > Go to Folder and type:",
            "Press Enter to access your iTunes backup folder.",
          ],
        },
        windows: {
          path: "C:\\Users\\<YourUsername>\\AppData\\Roaming\\Apple Computer\\MobileSync\\Backup\\",
          instructions: [
            "Open File Explorer and navigate to:",
            "Replace <YourUsername> with your Windows account name.",
            "If you cannot see the AppData folder:",
            "Click View in the top menu.",
            "Enable Hidden items.",
          ],
        },
      },
    },
    {
      title: "Locate the Messages Backup File",
      description: "Find the specific file containing your messages",
      content: {
        shared: [
          "Inside the Backup folder, you'll see one or more subfolders with long alphanumeric names. Each represents a device backup.",
          "Open the most recent folder (based on its last modification date).",
          "Look for a file named:",
        ],
        filename: "3d0d7e5fb2ce288813306e4d4636395e047a3d28",
        note: "This file contains your message data.",
      },
    },
    {
      title: "Upload the File",
      description: "Upload your backup file to our system",
      content: {
        shared: [
          "Return to this web page.",
          "Click the Browse or Upload button below.",
          "Select the 3d0d7e5fb2ce288813306e4d4636395e047a3d28 file.",
          "Click Open to confirm your selection.",
          "Press Submit or Upload to complete the process.",
        ],
      },
    },
    {
      title: "Verify the Upload",
      description: "Ensure your file was uploaded successfully",
      content: {
        shared: [
          "Once the file is successfully uploaded, you will see a confirmation message.",
          "If there's an error, double-check that you selected the correct file.",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            iTunes Backup Instructions
          </h1>
          <p className="text-xl text-gray-600">
            Follow these steps to locate and upload your iTunes backup file
          </p>
        </div>

        <Tabs defaultValue="macos" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
            <TabsTrigger value="macos" onClick={() => setPlatform("macos")}>
              macOS
            </TabsTrigger>
            <TabsTrigger value="windows" onClick={() => setPlatform("windows")}>
              Windows
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
                    {index + 1}
                  </span>
                  {step.title}
                </CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {step.content[platform] && (
                  <>
                    {step.content[platform].instructions.map((instruction, i) => (
                      <p key={i} className="text-gray-600">
                        {instruction}
                      </p>
                    ))}
                    {step.content[platform].path && (
                      <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
                        <code className="text-sm">{step.content[platform].path}</code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(step.content[platform].path)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
                {step.content.shared && (
                  <div className="space-y-2">
                    {step.content.shared.map((text, i) => (
                      <p key={i} className="text-gray-600">
                        {text}
                      </p>
                    ))}
                  </div>
                )}
                {step.content.filename && (
                  <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
                    <code className="text-sm">{step.content.filename}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(step.content.filename)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                {step.content.note && (
                  <p className="text-sm text-gray-500 italic">{step.content.note}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Troubleshooting Tips
          </h2>
          <ul className="space-y-2 text-blue-800">
            <li>• File not found? Ensure you are looking in the correct backup folder for the most recent modification date.</li>
            <li>• Encrypted backups? Turn off encryption in iTunes, back up your device again, and repeat the steps.</li>
            <li>• Need help? Contact our support team.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;