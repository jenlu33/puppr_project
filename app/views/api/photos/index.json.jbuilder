require 'byebug'

@photos.each do |photo|
 
  json.set! photo.id do

    json.extract! photo, :id, :user_id, :title, :caption
    # json.src url_for(photo.photo)
  end
end