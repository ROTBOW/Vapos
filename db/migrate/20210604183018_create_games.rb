class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.decimal :cost, null: false
      t.string :images_url

      t.timestamps
    end

    add_index :games, :title, unique: true
  end
end
