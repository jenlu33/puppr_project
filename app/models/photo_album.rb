# == Schema Information
#
# Table name: photo_albums
#
#  id         :bigint           not null, primary key
#  photo_id   :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PhotoAlbum < ApplicationRecord
end
