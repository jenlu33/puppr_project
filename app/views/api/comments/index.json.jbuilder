@comments.each do |comment|
  json.set! comment.id do
    json.partial! 'api/comments/comment', comment: comment
    # json.extract! comment, :id, :user_id, :photo_id, :body
  end
end

