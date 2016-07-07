class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :project_id, null: false
      
      t.timestamps null: false
    end
  end
end
