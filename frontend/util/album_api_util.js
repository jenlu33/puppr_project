// all albums of specific user
export const fetchAlbums = (userId) => (
  $.ajax({
    url: `/api/users/${userId}/albums`,
    method: "GET"
  })
);

//show album
export const fetchAlbum = (albumId) => (
  $.ajax({
    url: `/api/albums/${albumId}`,
    method: "GET"
  })
);

//create album
export const createAlbum = (album) => {
  return (
    $.ajax({
      url: `/api/albums`,
      method: "POST",
      data: {album}
    })
  );
};

//update album
export const updateAlbum = (album) => {
  const albumId = album.id;
  return (
    $.ajax({
      url: `api/albums/${albumId}`,
      method: "PATCH",
      data: {album}
    })
  );
};

//delete album
export const deleteAlbum = (albumId) => (
  $.ajax({
    url: `api/albums/${albumId}`,
    method: "DELETE"
  })
);