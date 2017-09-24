

class Plane {
    x: number;
    y: number;
    width: number;
    height: number;
    alive: boolean;
    lifes: number;
    image: any;

    kill() {
        let o = this;
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }
    collide(b: Plane): boolean {
        // log('block', o.alive, b)
        let o = this;
        return o.alive && (Utils.rectIntersects(o, b) || Utils.rectIntersects(b, o))
    }
}