class Hello {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    sayhello() {
        return (this.name + "__" + this.age);
    }
}
var h = new Hello("ccccccmd", 18);
document.body.innerHTML = h.sayhello();
//# sourceMappingURL=hello.js.map