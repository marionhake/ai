function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (!userInput.trim()) return;
  
  appendMessage('You: ' + userInput, 'user');
  
  const aiResponse = getAIResponse(userInput);
  
  setTimeout(() => appendMessage('AI: ' + aiResponse, 'ai'), 1000);
  
  document.getElementById('user-input').value = '';
}

function appendMessage(message, sender) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(input) {
  const userMessage = input.toLowerCase();

  if (userMessage.includes('hello')) {
    return 'Hi there! How can I help you today?';
  } else if (userMessage.includes('how are you')) {
    return 'I\'m doing great, thank you for asking!';
  } else if (userMessage.includes('your name')) {
    return 'I\'m your friendly AI assistant!';
  } else if (userMessage.includes('bye')) {
    return 'Goodbye! Have a great day!';
  } else {
    return 'I\'m not sure how to respond to that. Can you ask something else?';
  }
}
