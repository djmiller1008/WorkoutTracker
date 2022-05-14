class EditExercisesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column(:exercises, :reps)
    add_column(:exercises, :reps, :string)
  end
end
