import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM"

export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";
export const REMOVE_ALBUM_ERRORS = "REMOVE_ALBUM_ERRORS";

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
});

const removeAlbum = (albumId) => ({
  type: REMOVE_ALBUM,
  albumId
});

const receiveAlbumErrors = (errors) => ({
  type: RECEIVE_ALBUM_ERRORS,
  errors: errors
});

export const removeAlbumErrors = () => ({
  type: REMOVE_ALBUM_ERRORS,
  errors: []
});


export const fetchAlbums = (userId) => dispatch => (
  AlbumAPIUtil.fetchAlbums(userId)
    .then(albums => dispatch(receiveAlbums(albums)))
);

export const fetchAlbum = (albumId) => dispatch => (
  AlbumAPIUtil.fetchAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)))
);

export const createAlbum = (album) => dispatch => (
  AlbumAPIUtil.createAlbum(album)
    .then(album => dispatch(receiveAlbum(album)),
      (error) => dispatch(receiveAlbumErrors(error.responseJSON))
    ));

// export const updateAlbum = (album) => dispatch => (
//   AlbumAPIUtil.updateAlbum(album)
//     .then(album => dispatch(receiveAlbum(album)),
//           (error) => dispatch(receiveAlbumErrors(error.responseJSON))
// ));

export const deleteAlbum = (albumId) => dispatch => (
  AlbumAPIUtil.deleteAlbum(albumId)
    .then(() => dispatch(removeAlbum(albumId)))
)

