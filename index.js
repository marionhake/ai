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

function checkEnter(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function getAIResponse(input) {
  const userMessage = input.toLowerCase();

  if (userMessage.includes('hello') || userMessage.includes('hi')) {
    return 'Hello! How can I assist you today?';
  } else if (userMessage.includes('make me 1 image')) {
    createImageFromMessage(input);
    return 'I am generating an image based on your request. Please wait!';
  } else if (userMessage.includes('give me an icon')) {
    provideIcon();
    return 'I am generating an icon for you. Please wait!';
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

function createImageFromMessage(message) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = 300;
  canvas.height = 100;

  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText(message, 10, 50);

  const link = document.createElement('a');
  link.download = 'generated_image.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function provideIcon() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = 64;
  canvas.height = 64;

  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('AI', 10, 35);

  const link = document.createElement('a');
  link.download = 'icon.ico';
  link.href = canvas.toDataURL('image/x-icon');
  link.click();
}

