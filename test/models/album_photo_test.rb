# == Schema Information
#
# Table name: album_photos
#
#  id         :bigint           not null, primary key
#  photo_id   :integer
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class AlbumPhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
