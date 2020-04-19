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
end
