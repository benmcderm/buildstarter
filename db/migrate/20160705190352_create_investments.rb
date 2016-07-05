class CreateInvestments < ActiveRecord::Migration
  def change
    create_table :investments do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.integer :amount, null: false
      t.timestamps null: false
    end
  end
end
