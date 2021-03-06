import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";

export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REMOVE_COMMENT_ERRORS = "REMOVE_COMMENT_ERRORS";

const receiveComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

export const clearComments = () => ({
  type: CLEAR_COMMENTS
})

const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors: errors
});

export const removeCommentErrors = () => ({
  type: REMOVE_COMMENT_ERRORS,
  errors: []
});

//all comments
export const fetchComments = (photoId) => dispatch => (
  CommentAPIUtil.fetchComments(photoId)
    .then(comments => dispatch(receiveComments(comments)))
);

//comment create
export const createComment = (comment) => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)),
          (error) => dispatch(receiveCommentErrors(error.responseJSON))
));

//comment delete
export const deleteComment = (commentId) => dispatch => (
  CommentAPIUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
);