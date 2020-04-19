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
require 'test_helper'

class PhotoTagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
