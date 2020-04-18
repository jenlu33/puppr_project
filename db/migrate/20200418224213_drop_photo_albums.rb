class DropPhotoAlbums < ActiveRecord::Migration[5.2]
  def change
    drop_table :photo_albums
  end
end
