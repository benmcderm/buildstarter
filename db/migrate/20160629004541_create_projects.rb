class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.string :media_url, null: false
      t.integer :author_id, null: false
      t.boolean :archived, null: false

      t.timestamps null: false
    end
    add_index :projects, :author_id
  end
end
