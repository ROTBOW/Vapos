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
class UsersGame < ApplicationRecord
    validates :user_id, uniqueness: { scope: :game_id}
    validates :owned, presence: true

    belongs_to :owner,
        foreign_key: :user_id,
        class_name: "User"

    belongs_to :game,
        foreign_key: :game_id,
        class_name: "Game"

end
