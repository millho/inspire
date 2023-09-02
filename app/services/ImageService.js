import { AppState } from "../AppState.js"
import { Image } from "../models/Image.js"
import { api } from "./AxiosService.js"


class ImageService {
    async getImage() {
        const res = await api.get('/api/images')
        AppState.dailyImage = new Image(res.data)
    }

}

export const imageService = new ImageService