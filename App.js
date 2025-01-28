import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import VeneerPreview from "./components/VeneerPreview";

function App() {
    const [processedImage, setProcessedImage] = useState(null);

    return (
        <div className="app container mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-4">Veneers AI</h1>
            <UploadForm setProcessedImage={setProcessedImage} />
            {processedImage && <VeneerPreview image={processedImage} />}
        </div>
    );
}

export default App;
