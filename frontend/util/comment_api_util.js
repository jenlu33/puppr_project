// fetches all comments
export const fetchComments = (photoId) => (
  $.ajax({
    url: `/api/photos/${photoId}/comments`,
    method: "GET"
  })
);

//create comment
export const createComment = (formData) => {
  const photoId = formData.get(`photo_id`);
  return (
    $.ajax({
      url: `/api/photos/${photoId}/comments`,
      method: "POST",
      data: formData,
      contentType: false,
      processData: false
    })
  );
};


//delete comment
export const deleteComment = (photoId, commentId) => (
  $.ajax({
    url: `/api/photos/${photoId}/comments/${commentId}`,
    method: "DELETE"
  })
);

