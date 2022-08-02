class CreateFoodLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :food_logs do |t|
      t.integer :food_item_id, null: false
      t.integer :user_id, null: false
      t.integer :servings, null: false
      t.integer :food_diary_id, null: false
      t.timestamps
    end
  end
end
