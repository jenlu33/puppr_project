@photos.each do |photo|
 
  json.set! photo.id do
    json.extract! photo, :id, :user_id, :title, :caption
    
    if photo.photo.attached?
      json.photoUrl url_for(photo.photo)
    end
  end
end