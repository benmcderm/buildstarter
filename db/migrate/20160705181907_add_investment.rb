class AddInvestment < ActiveRecord::Migration
  def change
    add_column :projects, :investment, :integer, null: false    
  end
end
