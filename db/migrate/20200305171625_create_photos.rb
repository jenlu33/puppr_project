class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.integer :album_id, null: false
      t.string :title, null: false
      t.string :caption

      t.timestamps
    end
  end
end
