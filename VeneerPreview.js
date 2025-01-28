import React from "react";

function VeneerPreview({ image }) {
    return (
        <div className="veneers-preview mt-4">
            <h2 className="text-lg font-semibold mb-2">Processed Image:</h2>
            <img src={image} alt="Processed" className="border rounded shadow" />
        </div>
    );
}

export default VeneerPreview;
