import * as TagAPIUtil from '../util/tag_api_util';

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";

const receiveTags = (tags) => ({
  type: RECEIVE_ALL_TAGS,
  tags
});

const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag
});

const removeTag = (tagId) => ({
  type: REMOVE_TAG,
  tagId
});

export const fetchTags = (photoId) => dispatch => (
  TagAPIUtil.fetchTags(photoId)
    .then(tags => dispatch(receiveTags(tags)))
);

export const createTag = (tag) => dispatch => (
  TagAPIUtil.createTag(tag)
    .then(tag => dispatch(receiveTag(tag)))
);

export const deleteTag = (tagId) => dispatch => (
  TagAPIUtil.deleteTag(tagId)
    .then(() => dispatch(removeTag(tagId)))
);