tag ||= @tag
json.extract! tag, :id, :user_id, :name, :photo_ids

# json.photos tag.photos