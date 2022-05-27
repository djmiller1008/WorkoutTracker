class EditWorkoutsTable < ActiveRecord::Migration[5.2]
  def change
    add_column(:workouts, :comment, :string)
  end
end
