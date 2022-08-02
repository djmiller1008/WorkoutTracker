class CreateFoodDiaries < ActiveRecord::Migration[5.2]
  def change
    create_table :food_diaries do |t|
      t.integer :user_id, null: false
      t.datetime :date, null: false
      t.string :comment
      t.timestamps
    end
  end
end
