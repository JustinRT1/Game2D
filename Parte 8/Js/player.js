export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidht = gameWidth
        this.gameHeight = gameHeight
        this.states = []
        this.currentState = this.states[0]
        this.image = dogImage
        this.width = 200
        this.height = 181.83
        this.x = 0
        this.y = 0
    }
    update() {

    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y)
    }
}