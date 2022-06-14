import { User } from '../models/user.model';

export class ReadTweet{
    constructor(public user: User, public text: String, public likes: number, public retweets: number, public comments: number, public dateTime: Date) {}
}

