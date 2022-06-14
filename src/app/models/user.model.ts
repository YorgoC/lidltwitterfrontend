export class User{
    constructor(id: number, auth0Id: string, public userName: string, public mentionName: string, public bio: string, public profilePicture: string, role: string, location: string) {}
}
