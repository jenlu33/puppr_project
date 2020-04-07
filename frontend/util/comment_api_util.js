// fetches all comments
export const fetchComments = (photoId) => (
  $.ajax({
    url: `/api/photos/${photoId}/comments`,
    method: "GET"
  })
);

//create comment
export const createComment = (formData) => (
  $.ajax({
    url: "api/comments",
    method: "POST",
    data: formData
  })
);


//delete comment
export const deleteComment = (commentId) => (
  $.ajax({
    url: `api/comments/${commentId}`,
    method: "DELETE"
  })
);

