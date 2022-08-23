

export class User {

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password?: string,
        public img?: string,
        public google?: boolean,
        public role?: string,
        public uid?: string,
    ) {}
}