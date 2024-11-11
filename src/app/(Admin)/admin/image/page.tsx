"use client";
import { useRef, useState } from "react";

export default function UploadForm() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState("icaro");

  async function uploadFile(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("file", fileInput?.current?.files?.[0]!);
    formData.append("url", url); // Add URL to the formData

    const response = await fetch("/api/upload/image/cover", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <form className="flex flex-col gap-4">
      <label>
        <span>URL</span>
        <input
          type="text"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
      </label>
      <label>
        <span>Upload a file</span>
        <input type="file" name="file" ref={fileInput} />
      </label>
      <button type="submit" onClick={uploadFile}>
        Submit
      </button>
    </form>
  );
}
