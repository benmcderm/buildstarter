class RemoveInvestment < ActiveRecord::Migration
  def change
    remove_column :projects, :investment
  end
end
