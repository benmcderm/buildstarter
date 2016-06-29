# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

buildings = Project.create([
  { name: 'Chicago St',
    description: '5 story apartment',
    street_address: '423 Chicago St',
    city: 'Philadelphia',
    state: 'PA',
    zip_code: 29322,
    media_url: 'google.com',
    author_id: 16,
    archived: false
  },

  { name: 'Copenhagen St',
    description: 'Cash flowing multifamily',
    street_address: '555 Copenhagen St',
    city: 'Rochester',
    state: 'NY',
    zip_code: 21112,
    media_url: 'yahoo.com',
    author_id: 17,
    archived: false
  }
  ])
