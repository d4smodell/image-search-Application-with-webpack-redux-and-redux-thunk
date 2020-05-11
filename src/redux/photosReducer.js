import Axios from "axios"

const SEARCH_PHOTOS = 'SEARCH_PHOTOS'

const initialState = {
    images: [],
    photos: [1, 2, 3]
}

const photosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_PHOTOS: 
        return {
            ...state,
            images: action.images
        }
        default: return state
    }
}

export const searchPhotosThunk = (value) => async (dispatch) => {
    const API_KEY = '16443821-925dcbf9aabe6b8adf2f55117'
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo`
    const response = await Axios.get(url)
    dispatch(searchPhotos(response.data.hits))
}

const searchPhotos = (images) => ({type: SEARCH_PHOTOS, images})

export default photosReducer