class AddUserExerciseIdToWorkoutLogs < ActiveRecord::Migration[5.2]
  def change
    add_column(:workout_logs, :user_exercise_id, :integer)
  end
end
