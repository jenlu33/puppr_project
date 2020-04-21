//fetches all tags
export const fetchTags = (photoId) => (
  $.ajax({
    url: `/api/photos/${photoId}/tags`,
    method: "GET"
  })
);

//fetch single tag
export const fetchTag = (tagId) => (
  $.ajax({
    url: `/api/tags/${tagId}`,
    method: "GET"
  })
)

//create tag
export const createTag = (tag) => {
  const photoId = tag.photo_id;
  return (
    $.ajax({
      url: `api/photos/${photoId}/tags`,
      method: "POST",
      data: {tag}
    })
  )
};

//delete tag
export const deleteTag = (tagId) => (
  $.ajax({
    url: `/api/tags/${tagId}`,
    method: "DELETE"
  })
);
