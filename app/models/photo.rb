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
#  album_id   :integer
#
class Photo < ApplicationRecord
  validates :title, presence: true

  has_one_attached :photo

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
  
  has_many :comments,
    foreign_key: :photo_id,
    class_name: :Comment

  belongs_to :album,
    foreign_key: :album_id,
    class_name: :Album
end
