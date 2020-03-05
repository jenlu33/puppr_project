class AddUsersIndexToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_index :albums, [:name, :user_id], unique: true
  end
end
