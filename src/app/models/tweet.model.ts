import { User } from './user.model';


export class Tweet{
    constructor(public userName: String, public mentionName: String, public profilePicture: String, public text: String, public likes: number, public retweets: number, public comments: number, public dateTime: Date) {}
}

