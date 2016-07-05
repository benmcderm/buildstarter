class AddGoalToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :goal, :integer, null: false
  end
end
