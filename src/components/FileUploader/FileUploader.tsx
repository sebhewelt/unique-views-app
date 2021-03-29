import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import "./FileUploader.css";

export type FileAcceptTypes = ".log" | "text/*";
export interface FileUploaderProps {
  acceptTypes: FileAcceptTypes[];
  parseData: (file: File) => void;
}

export const FileUploader = ({ acceptTypes, parseData }: FileUploaderProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadNotifier, setUploadNotifier] = useState<null | string>(null);
  const acceptTypesJoined = acceptTypes.join(", ");
  const hasUploadedFiles = uploadedFiles.length > 0;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length) {
        setUploadNotifier("The upload was successful!");
        setUploadedFiles(acceptedFiles);
        acceptedFiles.forEach((file) => {
          parseData(file);
        });
      } else {
        setUploadNotifier(
          `There was a problem with your upload. Make sure to use one of the following MIME types: ${acceptTypesJoined}`
        );
      }
    },
    [acceptTypesJoined, parseData]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <section>
      <form action="*" {...getRootProps()}>
        <label htmlFor="logUpload">Upload a log file</label>
        <input {...getInputProps()} id="logUpload" accept={acceptTypesJoined} />
        <div className="dropzone">Drop a file here ...</div>
      </form>
      {uploadNotifier && <p>{uploadNotifier}</p>}
      {hasUploadedFiles && (
        <ul>
          {uploadedFiles.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
