class CreateUsersGames < ActiveRecord::Migration[5.2]
  def change
    create_table :users_games do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.boolean :owned, default: false

      t.timestamps
    end

    add_index :users_games, [:user_id, :game_id], unique: true

  end
end
