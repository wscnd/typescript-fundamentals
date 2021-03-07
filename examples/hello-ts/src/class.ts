interface HasEmail {
    name: string;
    email: string;
}

class Contact implements HasEmail {
    email: string;
    name: string;
    constructor(name: string, email: string) {
        this.email = email;
        this.name = name;
    }
}


class ParamPropContact implements HasEmail {
    constructor(public name: string, protected email: string = "no email") {
        // nothing needed
    }
}

var x = new ParamPropContact('a', 'b')