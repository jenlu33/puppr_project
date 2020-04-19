# json.partial! 'album', album: @album

json.extract! @album, :id, :title, :user_id
json.set! :photo_ids, @album.photos.pluck(:id)