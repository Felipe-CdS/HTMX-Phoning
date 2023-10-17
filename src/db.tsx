import { Database } from 'bun:sqlite';

export interface Member {

}

export interface Message {
    member: string,
    message_kr: string,
    message_en: string,
    message_br: string,
    timestamp: string
}

export class MessagesDatabase {
    private db: Database;

    constructor(){
        this.db = new Database('messages.db');

        this.init()
            .then(() => console.log('Database initialized'))
            .catch(console.error);
    }

    async init() {
        return this.db.run('CREATE TABLE IF NOT EXISTS messages (message_id INTEGER PRIMARY KEY AUTOINCREMENT, message_kr TEXT, message_br TEXT, message_en TEXT, created_at TIMESTAMP)');
    }

    async createMessage(messageKR: string, timestamp: Date){
        const query = this.db.query(`INSERT INTO messages (message_kr, message_br, message_en, created_at) VALUES (?, '', '', ?) RETURNING message_id`);
        return query.get(messageKR, timestamp.toISOString()) as Message;
    }

    async getAllMessages(){
        return this.db.query('SELECT * FROM messages').all();
    }
}