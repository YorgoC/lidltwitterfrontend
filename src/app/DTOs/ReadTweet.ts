import { User } from '../models/user.model';

export class ReadTweet{
    constructor(public userName: String, public mentionName: String, public profilePicture: String, public text: String, public likes: number, public retweets: number, public comments: number, public dateTime: Date) {}
}

