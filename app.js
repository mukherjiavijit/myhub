function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var message = messageInput.value;

  // Get API key from environment variable
  var apiKey = process.env.API_KEY;

  // Send message to ChatGPT API endpoint
  // and handle response
  fetch("https://api.openai.com/v1/engine/davinci-codex/completions", {
    method: "POST",
    body: JSON.stringify({
      prompt: message,
      max_tokens: 50
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    }
  })
    .then(response => response.json())
    .then(data => {
      // Display response from ChatGPT
      var chatBox = document.getElementById("chat-box");
      var responseElement = document.createElement("div");
      responseElement.innerHTML = "<strong>ChatGPT:</strong> " + data.choices[0].text;
      chatBox.appendChild(responseElement);

      // Clear input field
      messageInput.value = "";
    });
}
