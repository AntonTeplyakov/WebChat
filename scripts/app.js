const chatlist = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat');

newChatForm.addEventListener('submit',e =>{
    e.preventDefault();

    const message = newChatForm.message.value.trim();
    chatroom.AddChat(message)
    .then(()=>newChatForm.reset())
    .catch(err => console.log(err));
});

const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', 'shaun');


chatroom.getChats((data)=>{
     chatUI.render(data);
});