class AddToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :desc, :text, null: false, default: ' '
  end
end
