@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :caption
  end
end