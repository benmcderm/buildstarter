class ChangeInvestmentField < ActiveRecord::Migration
  def change
    change_column :projects, :investment, :integer, null: false
  end
end
