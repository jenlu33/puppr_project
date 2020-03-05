//photo feed (all photos in general)
export const fetchAllPhotos = () => (
  $.ajax({
    url: "/api/photos",
    method: "GET"
  })
)

//all photos of specified user
export const fetchAllUserPhotos = (userId) => (
  $.ajax({
    url: `/api/users/${userId}/photos`,
    method: "GET"
  })
)

//show photo
export const fetchPhoto = (photoId) => (
  $.ajax({
    url: `/api/photos/${photoId}`,
    method: 'GET'
  })
)

//upload photo
export const createPhoto = (photo) => (
  $.ajax({
    url: "api/photos",
    method: "POST",
    data: {photo}
  })
)

//update photo
export const updatePhoto = (photo) => (
  $.ajax({
    url: "api/photos",
    method: "PATCH",
    data: {photo}
  })
)

//delete photo
export const deletePhoto = (photoId) => (
  $.ajax({
    url: `api/photos/${photoId}`,
    method: "DELETE"
  })
)