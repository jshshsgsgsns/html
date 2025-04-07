document.getElementById('sendButton').addEventListener('click', async function() {
    const inputText = document.getElementById('inputText').value;

    if (!inputText) return;

    // 显示用户输入
    appendMessage('user', inputText);

    // 清空输入框
    document.getElementById('inputText').value = '';

    try {
        // 向后端发送请求
        const response = await fetch('http://localhost:8080/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: inputText }),
        });

        const data = await response.json();

        // 显示 AI 响应
        if (data.reply) {
            appendMessage('ai', data.reply);
        } else {
            appendMessage('ai', 'Sorry, I could not get a response.');
        }
    } catch (error) {
        console.error('Error:', error);
        appendMessage('ai', 'Sorry, something went wrong.');
    }
});

// 追加消息到聊天框
function appendMessage(sender, message) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(sender);
    messageContainer.innerHTML = `<p>${message}</p>`;
    document.getElementById('messages').appendChild(messageContainer);
    // 滚动到底部
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
}
