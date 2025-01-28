from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import base64

app = Flask(__name__)
CORS(app)


@app.route('/upload', methods=['POST'])
def upload_image():
    try:
        file = request.files['image']

        image = cv2.imdecode(np.frombuffer(
            file.read(), np.uint8), cv2.IMREAD_COLOR)


        processed_image = apply_veneers(image)

      
        _, buffer = cv2.imencode('.jpg', processed_image)
        encoded_image = base64.b64encode(buffer).decode('utf-8')

       
        return jsonify({"success": True, "image": encoded_image})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})


def apply_veneers(image):
    height, width, _ = image.shape
    overlay = image.copy()
    cv2.rectangle(overlay, (50, 50), (width - 50,
                  height // 2), (255, 255, 255), -1)
    
    return cv2.addWeighted(overlay, 0.5, image, 0.5, 0)


if __name__ == "__main__":
    app.run(debug=True)
