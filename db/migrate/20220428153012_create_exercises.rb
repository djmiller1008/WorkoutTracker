class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name, null: false
      t.integer :sets 
      t.integer :reps 
      t.float :weight
      t.integer :exercise_category_id
      t.integer :workout_id, null: false
      t.index :workout_id
      t.timestamps
    end
  end
end
