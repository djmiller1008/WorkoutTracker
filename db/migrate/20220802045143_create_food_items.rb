class CreateFoodItems < ActiveRecord::Migration[5.2]
  def change
    create_table :food_items do |t|
      t.integer "user_id", null: false
      t.string "name", null: false
      t.integer "calories", null: false
      t.integer "fat"
      t.integer "protein"
      t.integer "carbohydrates"
      t.timestamps
    end
  end
end
