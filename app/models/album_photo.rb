# == Schema Information
#
# Table name: album_photos
#
#  id         :bigint           not null, primary key
#  photo_id   :integer
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class AlbumPhoto < ApplicationRecord

  belongs_to :photo,
    foreign_key: :photo_id,
    class_name: :Photo

  belongs_to :album,
    foreign_key: :album_id,
    class_name: :Album
end
