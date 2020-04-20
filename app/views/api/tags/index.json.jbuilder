@tags.each do |tag|
  json.set! tag.id do
    json.partial! 'api/tags/tag', tag: tag
    # json.extract! tag, :id, :name, :photo_id
  end
end