# @albums.each do |album|
#   json.set! album.id do
#     json.partial! 'album', album: album
#   end
# end

@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :user_id
    json.set! :photo_ids, album.photos.pluck(:id)
  end
end