class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :weight_unit, :string, :default => "kg"
  end
end
