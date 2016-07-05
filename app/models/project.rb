class Project < ActiveRecord::Base
  validates :name,
          :description,
          :street_address,
          :city,
          :state,
          :zip_code,
          :media_url,
          :author_id,
          :investment,
          presence: true
  validates :name, uniqueness: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: "User"

end
