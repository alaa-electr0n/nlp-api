# **NLP Sentiment Analysis Project**

Analyze the sentiment of text or URLs using the MeaningCloud Sentiment Analysis API. This project is designed to demonstrate advanced front-end and back-end integration with service worker capabilities, Webpack optimization, and offline functionality.

## **Project Overview**

This project evaluates the sentiment of text or URLs by calling the **MeaningCloud Sentiment Analysis API**. It supports:

- Sentiment polarity detection (e.g., positive, negative, neutral).
- Subjectivity analysis (subjective vs. objective).
- Dynamic loading and error handling for improved user experience.
- Offline capabilities using a **service worker** for cached resources.

## **Features**

- Analyze sentiment of a provided URL or text.
- Clear and dynamic feedback:

  - Loading indicators while waiting for the API response.
  - Informative error messages for user guidance.

- Offline support with cached assets for seamless functionality.
- Modular, scalable project structure.
- Jest testing for input validation.

## **Technologies Used**

- **Frontend**: HTML, SCSS, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **API Integration**: MeaningCloud Sentiment Analysis API
- **Build Tool**: Webpack
- **Testing**: Jest
- **Service Workers**: Workbox Plugin

## **Getting Started**

### **Prerequisites**

1.  **Node.js and npm**: Install from [Node.js Official Website](https://nodejs.org/).
2.  **API Key**: Sign up at [MeaningCloud](https://www.meaningcloud.com/) to get your free API key.

### **Installation**

1.  git clone https://github.com/alaa-electr0n/nlp-api nlp-api
2.  npm install
3.  API_KEY=your-meaningcloud-api-key

## **How to Run the App**

### **Development Mode**

For live reloading and debugging:

`npm start`
`npm run build-dev`

Visit [http://localhost:9000](http://localhost:9000/) in your browser.

### **Production Build**

To create an optimized production build:

`npm run build-prod`

Serve the dist folder using a simple HTTP server:

`npx http-server dist`

### **Testing**

Run Jest tests:

`npm run test`

## **Usage**

1.  Open the app in your browser.
2.  Enter a URL or text in the input field and submit.
3.  View the sentiment analysis results:

    - **Polarity**: Positive, negative, or neutral.
    - **Subjectivity**: Objective or subjective.
    - **Text Snippet**: A snippet of the analyzed input.
    - **Confidence**: A precentage of how confident the tone is.
    - **Agreement**: The show the Approval/Disapproval of the Article Idea .

4.  If offline, previously cached assets will load to keep the app functional.

## **Acknowledgments**

- [MeaningCloud API](https://www.meaningcloud.com/) for their sentiment analysis tools.
- [Udacity Web Developer Nanodegree](https://www.udacity.com/enrollment/nd0011-ilo) for project inspiration.
