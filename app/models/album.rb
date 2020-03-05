# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord
  validates :name, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
