class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, uniqueness: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, uniqueness: true
      t.timestamps
      t.index :username
    end
  end
end
