export class CreateUser{
    constructor(public auth0Id: string,public username: string,public mentionName: string,public bio: string,public profilePicture: string) {}
}
