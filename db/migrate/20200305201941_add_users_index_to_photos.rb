class AddUsersIndexToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_index :photos, [:title, :user_id], unique: true
  end
end
