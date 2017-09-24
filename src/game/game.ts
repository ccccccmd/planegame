class Game {
    private loadingImages: GameImage[];

    private images: any[];

    private scene: Scene;
    private fps: number = 100;
    private canvas: any;
    private actions: { [key: string]: () => void }
    private runcallBack: () => void;
    private context: any;
    private keydowns: { [key: string]: boolean }
    constructor(fps: number, images: GameImage[], callBack: () => void) {
        this.fps = fps;
        this.loadingImages = images
        this.runcallBack = callBack
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        // events
        var self = this;
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function (event) {
            self.keydowns[event.key] = false
        })
        this.init()
    }

    update() {
        this.scene.update();
    }

    draw() {
        this.scene.draw();
    }

    registerAction(key: string, callback: () => void) {
        this.actions[key] = callback;
    }

    init() {
        var g = this
        var loads: number[] = []
        // 预先载入所有图片
        var imgs = g.loadingImages;
        for (var i = 0; i < imgs.length; i++) {


            let img = new Image()
            img.src = imgs[i].path;
            img.onload = function () {
                // 存入 g.loadedImage 中
                g.images.push({ name: imgs[i].name, image: img });
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                Utils.log('load images', loads.length, imgs.length)
                if (loads.length == imgs.length) {
                    Utils.log('load images', g.images)
                    g.__start()
                }
            }
        }


    }
    runloop() {
        Utils.log(this.fps.toString())
        // events
        var g = this
     
        for (let k in g.actions) {
            if (g.keydowns[k]) {
                // 如果按键被按下, 调用注册的 action
                g.actions[k]()
            }
        }
        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()
        // next run loop
        setTimeout(function () {
            g.runloop()
        }, 1000 / this.fps)
    }

    runWithScene(scene: Scene) {
        var g = this
        g.scene = scene
        // 开始运行程序
        setTimeout(function () {
            g.runloop()
        }, 1000 / this.fps)
    }
    replaceScene(scene: Scene) {
        this.scene = scene
    }
    __start() {
        this.runcallBack()
    }


}