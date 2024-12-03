export const steps = [
  {
    title: "Step 1: Locate Your iTunes Backup",
    platform: "macOS",
    content: (
      <>
        <p>For macOS Users:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open Finder and go to the menu bar.</li>
          <li>Select Go &gt; Go to Folder and type:</li>
          <li className="font-mono bg-gray-100 p-2 rounded">~/Library/Application Support/MobileSync/Backup/</li>
          <li>Press Enter to access your iTunes backup folder.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Step 1: Locate Your iTunes Backup",
    platform: "Windows",
    content: (
      <>
        <p>For Windows Users:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open File Explorer and navigate to:</li>
          <li className="font-mono bg-gray-100 p-2 rounded">C:\Users\&lt;YourUsername&gt;\AppData\Roaming\Apple Computer\MobileSync\Backup\</li>
          <li>Replace &lt;YourUsername&gt; with your Windows account name.</li>
          <li>If you cannot see the AppData folder:</li>
          <li>Click View in the top menu.</li>
          <li>Enable Hidden items.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Step 2: Locate the Messages Backup File",
    content: (
      <>
        <p>Inside the Backup folder, you'll see one or more subfolders with long alphanumeric names. Each represents a device backup.</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the most recent folder (based on its last modification date).</li>
          <li>Look for a file named:</li>
          <li className="font-mono bg-gray-100 p-2 rounded">3d0d7e5fb2ce288813306e4d4636395e047a3d28</li>
          <li>This file contains your message data.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Step 3: Upload the File",
    content: (
      <>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Return to this web page.</li>
          <li>Click the Browse or Upload button below.</li>
          <li>Select the 3d0d7e5fb2ce288813306e4d4636395e047a3d28 file.</li>
          <li>Click Open to confirm your selection.</li>
          <li>Press Submit or Upload to complete the process.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Step 4: Verify the Upload",
    content: (
      <>
        <p>Once the file is successfully uploaded, you will see a confirmation message.</p>
        <p>If there's an error, double-check that you selected the correct file.</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Troubleshooting Tips</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>File not found? Ensure you are looking in the correct backup folder for the most recent modification date.</li>
          <li>Encrypted backups? Turn off encryption in iTunes, back up your device again, and repeat the steps.</li>
          <li>Need help? Contact our support team.</li>
        </ul>
      </>
    ),
  },
];