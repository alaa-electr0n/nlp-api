import { convertConfidence, convertPolarity } from "./helpers.mjs";
export default function updateUI(data) {
  document.getElementById("results").innerHTML = `
            <h3>Sentiment Analysis Result:</h3>
            <p><strong>Polarity:</strong>${convertPolarity(data?.score_tag)}</p>
            <p><strong>Subjectivity:</strong>${data?.subjectivity}</p>
            <p><strong>Text Snippet:</strong>"${
              data?.sentence_list?.[0]?.segment_list?.[0]?.text ||
              data?.sentence_list[0]?.text
            }"</p>
            <p><strong>Confidence:</strong>${convertConfidence(
              data?.confidence
            )}</p>
            <p><strong>Agreement:</strong> ${data?.agreement}</p>`;
}
