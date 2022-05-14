class AddColumnToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_column(:workouts, :date, :datetime, null: false)
  end
end
