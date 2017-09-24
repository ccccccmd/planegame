class Plane {
    kill() {
        let o = this;
        o.lifes--;
        if (o.lifes < 1) {
            o.alive = false;
        }
    }
    collide(b) {
        // log('block', o.alive, b)
        let o = this;
        return o.alive && (Utils.rectIntersects(o, b) || Utils.rectIntersects(b, o));
    }
}
//# sourceMappingURL=plane.js.map