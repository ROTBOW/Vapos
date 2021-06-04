# == Schema Information
#
# Table name: games
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  cost        :decimal(, )      not null
#  images_url  :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
