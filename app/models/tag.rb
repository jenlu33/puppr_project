# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true, length: {maximum: 20}

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :photo_tags,
    foreign_key: :tag_id,
    class_name: :PhotoTag

  has_many :photos,
    through: :photo_tags,
    source: :photo
end
