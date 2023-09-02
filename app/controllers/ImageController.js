import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";

function _drawImage() {
    let dailyImage = AppState.dailyImage
    document.body.style.backgroundImage = `url(${dailyImage.largeImgUrl})`
}

export class ImageController {
    constructor() {
        AppState.on('account', this.getImage)
        AppState.on('dailyImage', _drawImage)
    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            Pop.error(error)
        }
    }
}