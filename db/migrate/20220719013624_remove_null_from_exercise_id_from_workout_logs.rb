class RemoveNullFromExerciseIdFromWorkoutLogs < ActiveRecord::Migration[5.2]
  def change
    remove_column(:workout_logs, :exercise_id)
    add_column(:workout_logs, :exercise_id, :integer)
  end
end
