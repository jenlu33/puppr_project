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
  const userId = album.user_id;
  return (
    $.ajax({
      url: `/api/users/${userId}/albums`,
      method: "POST",
      data: {album}
    })
  );
};

//update album
export const updateAlbum = (album) => {
  const userId = album.user_id;
  const albumId = album.id;
  return (
    $.ajax({
      url: `api/users/${userId}/albums/${albumId}`,
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