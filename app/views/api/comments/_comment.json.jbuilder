comment ||= @comment
json.extract! comment, :id, :user_id, :photo_id, :body

json.username comment.user.username
