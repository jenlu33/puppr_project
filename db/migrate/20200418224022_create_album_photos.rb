class CreateAlbumPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :album_photos do |t|
      t.integer :photo_id
      t.integer :album_id
      t.timestamps
    end
  end
end
