class CreateUserExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :user_exercises do |t|
      t.string "name", null: false
      t.integer "user_id", null: false
      t.integer "exercise_category_id", null: false
      t.timestamps
      
    end
  end
end
