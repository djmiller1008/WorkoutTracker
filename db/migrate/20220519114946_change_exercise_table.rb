class ChangeExerciseTable < ActiveRecord::Migration[5.2]
  def change
    remove_column(:exercises, :sets)
    remove_column(:exercises, :weight)
    remove_column(:exercises, :reps)
    remove_column(:exercises, :workout_id)
  end
end
