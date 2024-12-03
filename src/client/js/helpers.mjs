export function convertPolarity(score_tag) {
  switch (score_tag) {
    case "P+":
      return "Strong Positive";
    case "P":
      return "Positive";
    case "NEU":
      return "Neutral";
    case "N":
      return "Negative";
    case "N+":
      return "Strong Negative";
    case "NONE":
      return "No Sentiment";
    default:
      return "Unknown";
  }
}

export function convertConfidence(confidence) {
  return (confidence * 1).toFixed(1) + "%";
}
