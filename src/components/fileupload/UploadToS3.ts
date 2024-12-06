declare const FILE_UPLOAD_URL: string;
export const handleFileUpload = async (
  email: string,
  file: File,
  onProgress?: (progress: number) => void
): Promise<void> => {
  const bucketUrl = FILE_UPLOAD_URL;
  const fileName = file?.name;
  const url = `${bucketUrl}/${email}/${fileName}`;

  const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB
  const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

  let uploadedBytes = 0;

  return new Promise<void>((resolve, reject) => {
    const uploadChunk = (chunkIndex: number): void => {
      const start = chunkIndex * CHUNK_SIZE;
      const end = Math.min(file.size, start + CHUNK_SIZE);
      const chunk = file.slice(start, end);

      const xhr = new XMLHttpRequest();

      xhr.open("PUT", url, true);

      // Track upload progress
      xhr.upload.onprogress = (event: ProgressEvent) => {
        if (event.lengthComputable && onProgress) {
          const totalUploaded = uploadedBytes + event.loaded;
          const progress = (totalUploaded / file.size) * 100;
          onProgress(progress);
        }
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          uploadedBytes += chunk.size;

          if (chunkIndex + 1 < totalChunks) {
            uploadChunk(chunkIndex + 1);
          } else {
            if (onProgress) onProgress(100);
            resolve();
          }
        } else {
          reject(new Error(`Failed to upload chunk: ${xhr.statusText}`));
        }
      };

      xhr.onerror = () => {
        reject(new Error("An error occurred during the file upload."));
      };

      xhr.send(chunk);
    };

    uploadChunk(0);
  });
};
