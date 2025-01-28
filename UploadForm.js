import React, { useState } from "react";

function UploadForm({ setProcessedImage }) {
    const [file, setFile] = useState(null);

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return alert("Please select a file!");

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch(" http://127.0.0.1:5000/upload", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setProcessedImage(`data:image/jpeg;base64,${data.image}`);
            } else {
                alert("Processing failed: " + data.error);
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <form onSubmit={handleUpload} className="upload-form">
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="mb-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Upload and Process
            </button>
        </form>
    );
}

export default UploadForm;
