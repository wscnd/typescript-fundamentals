class Contact {
    constructor(name, email) {
        this.email = email;
        this.name = name;
    }
}
class ParamPropContact {
    constructor(name, email = "no email") {
        this.name = name;
        this.email = email;
        // nothing needed
    }
}
