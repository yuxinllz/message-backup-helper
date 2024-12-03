import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HelpCircle, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const FileUpload = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/x-itunes-backup': ['.backup']
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        toast.success("File uploaded successfully!");
      }
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill in all fields");
      return;
    }
    // Handle form submission
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome to Joey</h1>
          <p className="text-joey-muted">
            To get started, upload your child's iTunes backup files.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name<span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Upload File<span className="text-red-500">*</span>
              </label>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-joey-warm ml-2"
                onClick={() => navigate("/help/sync")}
              >
                <HelpCircle className="h-5 w-5 text-joey-sage" />
              </Button>
            </div>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-joey-sage bg-joey-warm' : 'border-gray-300 hover:border-joey-sage'}`}
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto h-12 w-12 text-joey-sage mb-4" />
              <p className="text-sm font-medium">
                Drag & drop iTunes Backup Files
              </p>
              <p className="text-xs text-joey-muted mt-2">
                or click to select files from your computer
              </p>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-joey-sage hover:bg-joey-sage/90"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;