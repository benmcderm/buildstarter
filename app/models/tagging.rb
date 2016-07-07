class Tagging < ActiveRecord::Base
  validates :tag_id,
            :project_id,
            presence: true

  belongs_to :tag,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: "Tag"

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: "Project"
end
