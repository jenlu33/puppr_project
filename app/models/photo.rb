# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  caption    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Photo < ApplicationRecord
  validates :title, presence: true

  has_one_attached :photo

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
  
  has_many :comments, dependent: :destroy,
    foreign_key: :photo_id,
    class_name: :Comment

  has_many :album_photos,
    primary_key: :id, 
    foreign_key: :photo_id,
    class_name: :PhotoAlbum

  has_many :albums,
    through: :album_photos,
    source: :album

end
