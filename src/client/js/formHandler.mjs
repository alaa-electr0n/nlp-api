import updateUI from "./updateUI.mjs";

export const handleSubmit = async (event) => {
  event.preventDefault();

  const text = document.getElementById("name").value;
  const loadingDiv = document.getElementById("loading");
  const errorDiv = document.getElementById("error");
  const resultsDiv = document.getElementById("results");

  //Empty all the results
  // errorDiv.style.display = "none";
  errorDiv.innerHTML = "";
  resultsDiv.innerHTML = "";

  if (!text) {
    errorDiv.innerHTML = `<p>Please enter a valid URL for analysis.</p>`;
    // errorDiv.style.display = "block";
    return;
  }

  try {
    // Show loading message
    loadingDiv.style.display = "block";

    const response = await fetch("http://localhost:3000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();

    //hide loading message
    loadingDiv.style.display = "none";

    // show the results
    updateUI(data);
  } catch (error) {
    // Hide loading message
    loadingDiv.style.display = "none";
    console.error("Error:", error.message);
    errorDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    // errorDiv.style.display = "block";
  }
};
