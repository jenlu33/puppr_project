class DeletePhotoIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :photos, name: "index_photos_on_album_id"
    remove_index :photos, name: "index_photos_on_title_and_user_id"
    remove_index :photos, name: "index_photos_on_user_id"
  end
end
