class Tag < ActiveRecord::Base
  validates :name
          presence: true
  validates :name, uniqueness: true

  has_many :taggings,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: "Tagging"

end
