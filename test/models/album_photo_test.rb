# == Schema Information
#
# Table name: album_photos
#
#  id         :bigint           not null, primary key
#  album_id   :integer
#  photo_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class AlbumPhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
