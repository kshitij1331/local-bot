function sendMessage() {
  const userInput = $('#userInput').val();
  $('#chatMessages').append(`<div class="user-message">${userInput}</div>`);
  $('#userInput').val('');

  // Send user message to the server
  $.post('/sendMessage', { message: userInput }, (data) => {
    const botResponse = data.botResponse;
    $('#chatMessages').append(`<div class="bot-message">${botResponse}</div>`);
  });
}

