# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :title, presence: true
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :album_photos,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :AlbumPhoto

  has_many :photos,
    through: :album_photos,
    source: :photo
  
end
