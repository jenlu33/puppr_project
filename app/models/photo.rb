# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  album_id   :integer          not null
#  title      :string           not null
#  caption    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Photo < ApplicationRecord
  validates :title, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :album,
    foreign_key: :album_id,
    class_name: :Album
end
