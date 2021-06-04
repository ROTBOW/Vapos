class UpdateGamesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :cost
    add_column :games, :cost, :float, null: false
  end
end
