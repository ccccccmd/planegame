class Utils {
    //var e = sel => document.querySelector(sel)

    static log(message:string,...args:any[]) {

        let log = console.log.bind(console);
        log(message,args);
    }

    imageFromPath(path: string): any {
        var img = new Image()
        img.src = path
        return img
    }

    static rectIntersects(a: Plane, b: Plane): boolean {
        var o = a;
        if (b.y > o.y && b.y < o.y + o.image.height) {
            if (b.x > o.x && b.x < o.x + o.image.width) {
                return true
            }
        }
        return false
    }

}