class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    async AddChat(message) {
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        const response = await this.chats.add(chat);
        return response;
    }
    getChats(callback) {
        this.chats
        .where('room', '==', this.room)
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change=>{
                if(change.type === 'added'){
                    callback(change.doc.data());
                }
            });
        });
    }
}

const chatroom = new Chatroom('general', 'shaun');

chatroom.getChats((data)=>{
    console.log(data);
})

// chatroom.AddChat('Hello everyone')
//     .then(() => console.log('chat added'))
//     .catch(err => console.log(err));