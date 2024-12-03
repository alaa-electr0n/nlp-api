// Import the handleSubmit function
import { handleSubmit } from "./js/formHandler.mjs";

// Import styles
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/main.scss";
import "./styles/form.scss";
import "./styles/results.scss";

// Optional: Remove the alert or replace with a console.log for debugging
console.log("Application initialized");

// Optional: Add any initial setup or event listener attachments
const form = document.getElementById("urlForm");
if (form) form.addEventListener("submit", handleSubmit);
