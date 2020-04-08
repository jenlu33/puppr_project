json.extract! photo, :id, :user_id, :album_id, :title, :caption

if photo.photo.attached?
    json.photoUrl url_for(photo.photo)
end

json.user photo.user




