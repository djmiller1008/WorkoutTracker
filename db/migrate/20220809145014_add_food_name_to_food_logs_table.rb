class AddFoodNameToFoodLogsTable < ActiveRecord::Migration[5.2]
  def change
    add_column(:food_logs, :name, :string, null: false)
  end
end
