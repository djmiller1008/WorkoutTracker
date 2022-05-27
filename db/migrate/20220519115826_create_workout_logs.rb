class CreateWorkoutLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :workout_logs do |t|
      t.integer :workout_id, null: false
      t.integer :reps
      t.integer :weight
      t.string :weight_unit
      t.integer :exercise_id, null: false
      t.integer :user_id, null: false
      t.string :rep_unit
      t.timestamps
      t.index :workout_id
      t.index :exercise_id
      t.index :user_id
    end
  end
end
