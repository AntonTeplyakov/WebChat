const chatlist = document.querySelector('.chat-list')

const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', 'shaun');


chatroom.getChats((data)=>{
     chatUI.render(data);
});