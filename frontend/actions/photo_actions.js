import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_ALL_USER_PHOTOS = "RECEIVE_ALL_USER_PHOTOS"
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_PHOTO_ERRORS = "REMOVE_ERRORS";


const receiveAllPhotos = () => ({
  type: RECEIVE_ALL_PHOTOS,
})

const receiveAllUserPhotos = (userId) => ({
  type: RECEIVE_ALL_USER_PHOTOS,
  userId
})

const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
})

const deletePhoto = () => ({
  type: DELETE_PHOTO,
})

const receiveErrors = (errors) => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors: errors
})

export const removeErrors = () => ({
  type: REMOVE_PHOTO_ERRORS,
  errors: []
})

