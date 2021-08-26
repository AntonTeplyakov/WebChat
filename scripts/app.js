const chatlist = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');

newChatForm.addEventListener('submit',e =>{
    e.preventDefault();

    const message = newChatForm.message.value.trim();
    chatroom.AddChat(message)
    .then(()=>newChatForm.reset())
    .catch(err => console.log(err));
});

newNameForm.addEventListener('submit',e=>{
    e.preventDefault();

    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();
});

const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', 'shaun');


chatroom.getChats((data)=>{
     chatUI.render(data);
});