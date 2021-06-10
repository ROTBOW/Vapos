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
class Game < ApplicationRecord
    validates :title, uniqueness: true
    validates :description, :cost, presence: true

    has_many :users_games,
        foreign_key: :game_id,
        class_name: "UsersGame"

    has_many :owners,
        through: :users_games,
        source: :owner

    has_many :cart_items,
        foreign_key: :game_id,
        class_name: :CartItem

    has_many :cart_owners,
        through: :cart_items,
        source: :user
end
