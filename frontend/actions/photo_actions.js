import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_ALL_USER_PHOTOS = "RECEIVE_ALL_USER_PHOTOS"
export const RECEIVE_ALL_TAG_PHOTOS = "RECEIVE_ALL_TAG_PHOTOS"
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const CLEAR_PHOTOS = "CLEAR_PHOTOS";

export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const REMOVE_PHOTO_ERRORS = "REMOVE_ERRORS";


const receivePhotos = (photos) => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

const receiveAllUserPhotos = (photos) => ({
  type: RECEIVE_ALL_USER_PHOTOS,
  photos
});

const receiveAllTagPhotos = (photos) => ({
  type: RECEIVE_ALL_TAG_PHOTOS,
  photos
})

const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

const removePhoto = (photoId) => ({
  type: REMOVE_PHOTO,
  photoId
});

export const clearPhotos = () => ({
  type: CLEAR_PHOTOS
})

const receivePhotoErrors = (errors) => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors: errors
});

export const removePhotoErrors = () => ({
  type: REMOVE_PHOTO_ERRORS,
  errors: []
});

//general photo index
export const fetchPhotos = () => dispatch => {
  return (
  PhotoAPIUtil.fetchPhotos().then(photos => dispatch(receivePhotos(photos))))
}

// user's photo index
export const fetchUserPhotos = (userId) => dispatch => (PhotoAPIUtil.fetchAllUserPhotos(userId)
  .then(photos => dispatch(receiveAllUserPhotos(photos))))

// tag photo index
export const fetchTagPhotos = (tagId) => dispatch => (PhotoAPIUtil.fetchAllTagPhotos(tagId)
  .then(tags => dispatch(receiveAllTagPhotos(tags))))

//photo show
export const fetchPhoto = (photoId) => dispatch => (PhotoAPIUtil.fetchPhoto(photoId)
  .then(photo => dispatch(receivePhoto(photo))))

//photo create
export const createPhoto = (photo) => dispatch => (PhotoAPIUtil.createPhoto(photo)
  .then(photo => dispatch(receivePhoto(photo)),
        (error) => dispatch(receivePhotoErrors(error.responseJSON))))

//photo update
export const updatePhoto = (photo) => dispatch => (PhotoAPIUtil.fetchPhoto(photo)
  .then(photo => dispatch(receivePhoto(photo)),
        (error) => dispatch(receivePhotoErrors(error.responseJSON))))

//photo delete
export const deletePhoto = (photoId) => dispatch => (PhotoAPIUtil.deletePhoto(photoId)
  .then(() => dispatch(removePhoto(photoId))))

