class CartItem < ApplicationRecord
    validates :user_id, uniqueness: { scope: [:user_id, :game_id]}
    
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :game,
        foreign_key: :game_id,
        class_name: :Game

        
end
