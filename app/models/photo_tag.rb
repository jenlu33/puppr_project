# == Schema Information
#
# Table name: photo_tags
#
#  id         :bigint           not null, primary key
#  tag_id     :integer
#  photo_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PhotoTag < ApplicationRecord

  belongs_to :tag,
    foreign_key: :tag_id,
    class_name: :Tag

  belongs_to :photo,
    foreign_key: :photo_id,
    class_name: :Photo
end
