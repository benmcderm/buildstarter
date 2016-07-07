class AddFieldsToProject < ActiveRecord::Migration
  def change
    add_column :projects, :rating, :string, null: false
    add_column :projects, :end_date, :date, null: false
  end
end
