import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FolderPlus, X } from "lucide-react";
import { toast } from "sonner";
import { iosFilesPredefinedPathTree, iosFilesPredefinedPath } from "@/utils/constants"
import { getAllKeys } from "@/utils/index"

declare global {
  interface Window {
    showDirectoryPicker?: () => Promise<FileSystemDirectoryHandle>;
  }
}

interface FileSystemDirectoryHandle {
  kind: string;
  name: string;
  entries?: () => AsyncIterableIterator<[string, FileSystemHandle]>;
}

interface DragzoneProps {
  onFileChange: (file: File[] | []) => void;
  files: File[] | null;
  maxSize: number;
  progress: number[];
  isSubmitting: boolean;
}

const Dragzone: React.FC<DragzoneProps> = ({ onFileChange, files, maxSize, progress, isSubmitting }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      if (rejectedFiles.length > 0) {
        toast.error(`Some files exceed ${maxSize}MB or are invalid.`);
        return;
      }

      const newFiles = [...files, ...acceptedFiles].slice(0, 2);
      if (newFiles.length > 2) {
        toast.error("You can only upload up to 2 files.");
      }
      onFileChange(newFiles);
    },
    [onFileChange, files, maxSize]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 2,
    multiple: true,
    maxSize: maxSize * 1024 * 1024,
    noClick: true
  });

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    onFileChange(updatedFiles);
  };

  const handleClick = async () => {
    if (window.showDirectoryPicker) {
      await handleFolderSelection();
    } else {
      const inputElement = document.querySelector('input[type="file"]') as HTMLInputElement | null;
      if (inputElement) {
        inputElement.click();
      } else {
        console.error("File input element not found.");
      }
    }
  };

  const handleFolderSelection = async () => {
    if (!window.showDirectoryPicker) {
      toast.error("Folder selection is not supported in this browser.");
      return;
    }

    try {
      const directoryHandle = await window.showDirectoryPicker();
      const contactFile = await searchForChildNodeInPathTree(directoryHandle, iosFilesPredefinedPath[0]);
      const messageFile = await searchForChildNodeInPathTree(directoryHandle, iosFilesPredefinedPath[1]);
      if (contactFile || messageFile) {
        onFileChange([contactFile, messageFile]);
      } else {
        toast.error("Needed files are not found in the selected folder.");
      }
    } catch (error) {
      console.log(error)
      if (!(error instanceof DOMException) || error.name !== "AbortError") {
        console.error("Error selecting folder:", error);
        toast.error("Could not access the folder.");
      }
    }
  };

  const searchForChildNodeInPathTree = async (
    directoryHandle: FileSystemDirectoryHandle,
    path: string[]
  ): Promise<File | null> => {
    let i = 0;
    for(;i < path.length; i++){
      if(path[i] == directoryHandle.name && directoryHandle.kind == "directory"){
        break;
      }
    }
    return searchForFileInPathTree(directoryHandle, path.slice(i + 1));
  }

  const searchForFileInPathTree = async (
    directoryHandle: FileSystemDirectoryHandle,
    path: string[]
  ): Promise<File | null> => {
    let currentHandle = directoryHandle;

    for (let i = 0; i < path.length; i++) {
      const nodeName = path[i];
      let found = false;
  
      for await (const [name, handle] of currentHandle .entries()) {
        if (name === nodeName) {
          found = true;
          if (handle.kind === "file" && i === path.length - 1) {
            if ("getFile" in handle) {
              return (handle as FileSystemFileHandle).getFile();
            }
          } else if (handle.kind === "directory") {
            currentHandle = handle as FileSystemDirectoryHandle;
          }
          break;
        }
      }
    }
    return null;
  };  

  const getProgressOpacity = (index: number): number => progress[index] ? 0.2 + (progress[index] / 100) * 0.8 : 0;
  const getFileOpacity = (index: number): number => progress[index] ? 1 - (progress[index] / 100) * 0.7 : 1;

  return (
    <div className="w-full fileupload-dragzone">
      {files?.length == 0 ? (
        <div
          {...getRootProps()}
          onClick={handleClick}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-200 ${
            isDragActive ? "border-primary bg-primary/5" : "border-form-300 hover:border-primary"
          }`}
        >
          <input {...getInputProps()} type="file" {...({ webkitdirectory: "true" } as React.InputHTMLAttributes<HTMLInputElement>)} multiple />
          <Upload className="mx-auto h-12 w-12 text-green-500" />
          <h4 className="mt-2 text-sm">
            {isDragActive ? "" : "Drag & drop files here"}
          </h4>
          {!isDragActive && (
            <small className="text-gray-600">Click to select files or folders</small>
          )}
        </div>
      ) : (
        files?.length == 1 && <div className="relative border rounded-lg p-4">
          <div
            {...getRootProps()}
            onClick={handleClick}
            className={`border-2 border-dashed rounded-lg pb-4 text-center cursor-pointer transition-colors duration-200 ${
              isDragActive ? "border-primary bg-primary/5" : "border-form-300 hover:border-primary"
            }`}
          >
            <input {...getInputProps()} />
            <h4 className="mt-2 text-sm">
              {isDragActive ? "Drop files here" : "Drag & drop file here"}
            </h4>
            {!isDragActive && (
              <small className="text-gray-600">Click to select a file</small>
            )}
          </div>
          {files.map((file, index) => (
            <div key={index} className="relative mb-4">
              {isSubmitting && (
                <>
                  <div
                    className="absolute inset-0 bg-blue-500 bg-opacity-30 z-0 fileupload-dragzone-progress"
                    style={{
                      width: `${progress[index]}%`,
                      opacity: getProgressOpacity(index),
                    }}
                  ></div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-sm font-medium text-black-900">
                    {progress[index]?.toFixed(0) || 0}%
                  </div>
                </>
              )}
              <div
                className="flex items-center gap-4 fileupload-dragzone-selected-file"
                style={{ opacity: getFileOpacity(index) }}
              >
                <div className="w-16 h-16 bg-form-100 rounded flex items-center justify-center">
                  <Upload className="h-8 w-8 text-form-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                  <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                {!isSubmitting && (
                  <button
                    onClick={() => removeFile(index)}
                    className="p-1 hover:bg-form-100 rounded-full transition-colors"
                    type="button"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default Dragzone;
