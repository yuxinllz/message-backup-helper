import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Header from "../components/Header";

const FileUpload = () => {
  const [name, setName] = useState("");
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
      toast.success("File uploaded successfully!");
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Sync Device</h2>
              <p className="mt-1 text-sm text-gray-600">
                Upload your child's device backup to sync their data
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Child's Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter child's name"
                />
              </div>

              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive ? "border-joey-sage bg-joey-sage/10" : "border-gray-300 hover:border-joey-sage"
                }`}
              >
                <input {...getInputProps()} />
                <p className="text-sm text-gray-600">
                  {isDragActive ? "Drop the file here" : "Drag & drop a file here, or click to select"}
                </p>
              </div>

              <Button className="w-full" size="lg">
                Upload & Sync
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;