export const steps = [
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