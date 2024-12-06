import React, { useState, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type StepContent = {
  shared?: ReactNode[];
  macos?: {
    instructions: ReactNode[];
  };
  windows?: {
    instructions: ReactNode[];
  };
};

type Step = {
  title: string;
  content: StepContent;
};

const InstructionSection: React.FC = () => {
  const [platform, setPlatform] = useState<"macos" | "windows">("macos");

  // Helper functions for formatting content
  const getContentFormat = (content: ReactNode) => (
    <p className="text-gray-600 inline">{content}</p>
  );

  const getSharedFormat = (content: ReactNode) => (
    <p className="text-gray-600">{content}</p>
  );

  const getCodeFormat = (content: string) => (
    <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
      <code className="text-sm">{content}</code>
    </div>
  );

  const getListFormat = (contents: ReactNode[]) => (
    <ul className="list-disc list-inside pl-4 mt-1">
      {contents.map((content, index) => (
        <li className="text-gray-600 pb-1" key={index}>
          {content}
        </li>
      ))}
    </ul>
  );

  const getChildListFormat = (contents: ReactNode[]) => (
    <ul className="list-square list-inside pl-4 mt-1">
      {contents.map((content, index) => (
        <li className="text-gray-600 pb-1" key={index}>
          {content}
        </li>
      ))}
    </ul>
  );

  const getReminderFormat = (content: ReactNode) => (
    <span className="text-sm p-3">{content}</span>
  );

  const steps: Step[] = [
    {
      title: "Locate Your iTunes Backup",
      content: {
        macos: {
          instructions: [
            getListFormat([
              getContentFormat(
                <>
                  Open <b>Finder</b> and go to the menu bar
                </>
              ),
              getContentFormat(
                <>
                  Select <b>Go</b> {">"} <b>Go to Folder</b> and type:{" "}
                  <code className="text-sm bg-gray-100 p-1 rounded block">
                    ~/Library/Application Support/MobileSync/Backup/
                  </code>
                </>
              ),
              getContentFormat(
                <>Press <b>Enter</b> to access your iTunes backup folder.</>
              ),
            ]),
          ],
        },
        windows: {
          instructions: [
            getListFormat([
              getContentFormat(
                <>
                  Open <b>File Explorer</b> and navigate to:{" "}
                  <code className="text-sm bg-gray-100 pt-2 pb-2 pl-3 rounded block">
                    C:\Users\{"<YourUsername>"}\AppData\Roaming\Apple Computer\MobileSync\Backup\
                  </code>
                  {getReminderFormat(
                    <>
                      Replace <code className="text-sm bg-gray-100">
                        {"<YourUsername>"}
                      </code>{" "}
                      with your Windows account name.
                    </>
                  )}
                </>
              ),
              <div className="text-gray-600 inline">
                If you cannot see the <code className="bg-gray-100">AppData</code> folder:
                {getChildListFormat([
                  <>Click <b>View</b> in the top menu.</>,
                  <>Enable <b>Hidden items</b>.</>,
                ])}
              </div>,
            ]),
          ],
        },
      },
    },
    {
      title: "Locate the Messages Backup File",
      content: {
        shared: [
          getSharedFormat(
            <>
              1. Inside the <b>Backup</b> folder, you'll see one or more
              subfolders with long alphanumeric names. Each represents a device
              backup.
            </>
          ),
          getSharedFormat(
            "2. Open the most recent folder (based on its last modification date)."
          ),
          getSharedFormat("3. Look for a file named:"),
          getCodeFormat("3d0d7e5fb2ce288813306e4d4636395e047a3d28"),
          getReminderFormat(
            "This file contains your message data."
          ),
        ],
      },
    },
    {
      title: "Upload the File",
      content: {
        shared: [
          getSharedFormat("1. Return to this web page."),
          getSharedFormat(
            <>
              2. Click the <b>Browse</b> or <b>Upload</b> button below.
            </>
          ),
          getSharedFormat(
            <>
              3. Select the{" "}
              <code className="text-sm bg-gray-100">
                3d0d7e5fb2ce288813306e4d4636395e047a3d28
              </code>{" "}
              file.
            </>
          ),
          getSharedFormat(
            <>
              4. Click <b>Open</b> to confirm your selection.
            </>
          ),
          getSharedFormat(
            <>
              5. Press <b>Submit</b> or <b>Upload</b> to complete the process.
            </>
          ),
        ],
      },
    },
    {
      title: "Verify the Upload",
      content: {
        shared: [
          getListFormat([
            "Once the file is successfully uploaded, you will see a confirmation message.",
            "If there's an error, double-check that you selected the correct file.",
          ]),
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
            Follow these steps to find and upload your iTunes backup
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
              </CardHeader>
              <CardContent className="space-y-4 text-wrap">
                {step.content[platform]?.instructions?.map(
                  (instruction, i) => (
                    <div key={i}>{instruction}</div>
                  )
                )}
                {step.content.shared && (
                  <div className="space-y-2">
                    {step.content.shared.map((text, i) => (
                      <div key={i}>{text}</div>
                    ))}
                  </div>
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
            <li>
              • <b>File not found?</b> Ensure you are looking in the correct
              backup folder for the most recent modification date.
            </li>
            <li>
              • <b>Encrypted backups?</b> Turn off encryption in iTunes, back up
              your device again, and repeat the steps.
            </li>
            <li>
              • <b>Need help?</b> Contact our support team.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructionSection;
