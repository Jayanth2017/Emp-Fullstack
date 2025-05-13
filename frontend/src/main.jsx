
import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";

// Get the root element from the HTML
const rootElement = document.getElementById("root");

// Create a root using React 18's createRoot API
const root = createRoot(rootElement);

// Render the app using root.render()
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Optional: Measure performance
reportWebVitals();
