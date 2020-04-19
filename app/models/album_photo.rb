# == Schema Information
#
# Table name: album_photos
#
#  id         :bigint           not null, primary key
#  album_id   :integer
#  photo_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class AlbumPhoto < ApplicationRecord
  validates :album_id, :photo_id, presence: true

  belongs_to :album,
    foreign_key: :album_id,
    class_name: :Album

  belongs_to :photo,
    foreign_key: :photo_id,
    class_name: :Photo
end
