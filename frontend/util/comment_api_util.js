// fetches all comments
export const fetchComments = (photoId) => (
  $.ajax({
    url: `/api/photos/${photoId}/comments`,
    method: "GET"
  })
);

//create comment
export const createComment = (comment) => {
  const photoId = comment.photo_id;
  return (
    $.ajax({
      url: `/api/photos/${photoId}/comments`,
      method: "POST",
      data: {comment},
    })
  );
};


//delete comment
export const deleteComment = (commentId) => (
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: "DELETE"
  })
);

