import React, { useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const ObjectDetection = () => {
  const [detections, setDetections] = useState([]);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const image = URL.createObjectURL(file);
      imageRef.current.src = image;
      await detectObjects();
    }
  };

  const detectObjects = async () => {
    const model = await cocoSsd.load();
    const predictions = await model.detect(imageRef.current);

    // Draw detections on canvas
    drawDetections(predictions);
    setDetections(predictions);
  };

  const drawDetections = (predictions) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Adjust canvas to image size
    canvas.width = imageRef.current.width;
    canvas.height = imageRef.current.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);

    predictions.forEach((prediction) => {
      const [x, y, width, height] = prediction.bbox;

      // Draw bounding box
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);

      // Draw label and score
      ctx.font = "18px Arial";
      ctx.fillStyle = "red";
      ctx.fillText(
        `${prediction.class} (${(prediction.score * 100).toFixed(2)}%)`,
        x,
        y > 10 ? y - 5 : 10
      );
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Object Detection with TensorFlow.js</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          ref={imageRef}
          alt="Selected"
          style={{ maxWidth: "100%", display: "none" }}
          onLoad={detectObjects}
        />
        <canvas ref={canvasRef} />
      </div>
      <div>
        <h2>Detections</h2>
        <ul>
          {detections.map((detection, index) => (
            <li key={index}>
              {detection.class} - {(detection.score * 100).toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ObjectDetection;
