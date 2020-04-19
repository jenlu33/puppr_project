class DropAlbumPhotos < ActiveRecord::Migration[5.2]
  def change
    drop_table :album_photos
  end
end
