# == Schema Information
#
# Table name: users_games
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  game_id    :integer          not null
#  owned      :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class UsersGameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
