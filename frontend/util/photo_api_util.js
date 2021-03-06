//photo feed (all photos in general)
export const fetchPhotos = () => {
  return (
    $.ajax({
      url: "/api/photos",
      method: "GET"
    })
  )
};

//all photos of specified user
export const fetchAllUserPhotos = (userId) => (
  $.ajax({
    url: `/api/users/${userId}/photos`,
    method: "GET"
  })
);

//all photos w same tag
export const fetchAllTagPhotos = (tagId) => (
  $.ajax({
    url: `api/tags/${tagId}/photos`,
    method: "GET"
  })
);

//show photo
export const fetchPhoto = (photoId) => (
  $.ajax({
    url: `/api/photos/${photoId}`,
    method: 'GET'
  })
);

//upload photo
export const createPhoto = (formData) => {
  
  return ($.ajax({
    url: "api/photos",
    method: "POST",
    data: formData,
    contentType: false,
    processData: false
  })
  )
};

//update photo
export const updatePhoto = (photo) => (
  $.ajax({
    url: "api/photos",
    method: "PATCH",
    data: {photo}
  })
);

//delete photo
export const deletePhoto = (photoId) => {
  return $.ajax({
    url: `api/photos/${photoId}`,
    method: "DELETE"
})};