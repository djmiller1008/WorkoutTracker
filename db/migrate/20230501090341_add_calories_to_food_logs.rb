class AddCaloriesToFoodLogs < ActiveRecord::Migration[5.2]
  def change
    add_column :food_logs, :calories, :integer
  end
end
