class AddInvestmentToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :investment, :decimal, :precision => 8, :scale => 2, null: false
  end
end
