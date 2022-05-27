class AddNameToWorkoutlogs < ActiveRecord::Migration[5.2]
  def change
    add_column(:workout_logs, :name, :string, null: false)
  end
end
