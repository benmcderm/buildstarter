# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create([
  username: "Username",
  password: "Password"
  ])

buildings = Project.create([
  {name: '123 Jane St', description: 'Apartment building', street_address: '123 Jane St', city: 'Boca Raton', state: 'FL', zip_code: 22312, media_url: 'http://www.iamnotastalker.com/wp-content/uploads/2012/04/P1040254-001.jpg', author_id: 16, archived: false},
  {name: '594 Wabasha St', description: 'Office building', street_address: '594 Wabasha St', city: 'Fargo', state: 'ND', zip_code: 64575, media_url: 'http://img06.deviantart.net/2031/i/2011/107/0/5/apartment_building___evening_by_dave5264-d3e7ol6.jpg', author_id: 16, archived: false},
  {name: '2020 Manila St', description: ' building', street_address: '2020 Manila St', city: 'New York', state: 'NY', zip_code: 12344, media_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg', author_id: 16, archived: false},
  {name: '555 Forest St', description: ' building', street_address: '555 Forest St', city: 'Salt Lake City', state: 'UT', zip_code: 44325, media_url: 'https://si.wsj.net/public/resources/images/BN-NN734_0414pp_12S_20160413160150.jpg', author_id: 16, archived: false},
  {name: '101 Quinwood St', description: ' building', street_address: '101 Quinwood St', city: 'Reno', state: 'NV', zip_code: 64787, media_url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/American_Apartment_Building_-_Portland_Oregon.jpg', author_id: 16, archived: false},
  {name: '350 17th St', description: ' building', street_address: '350 17th St', city: 'Austin', state: 'TX', zip_code: 88767, media_url: 'https://northseattlesarah.files.wordpress.com/2011/11/1799_001.jpg', author_id: 16, archived: false},
  {name: '80 Willow St', description: ' building', street_address: '80 Willow St', city: 'Seattle', state: 'WA', zip_code: 55463, media_url: 'http://www.hhlarchitects.com/images/2-4-3-285-delaware.jpg', author_id: 16, archived: false},
  {name: '200 2nd St', description: ' building', street_address: '200 2nd St', city: 'Rochester', state: 'NY', zip_code: 44544, media_url: 'http://cdn.patch.com/users/86497/2015/02/T800x600/20150254d10950d82cf.jpg', author_id: 16, archived: false},
  {name: '1030 Sycamore St', description: ' building', street_address: '1030 Sycamore St', city: 'Phoenix', state: 'AZ', zip_code: 54367, media_url: 'http://www.designboom.com/wp-content/uploads/2014/11/hiroyuki-ito-architects-bloom-apartments-tokyo-japan-designboom-01.jpg', author_id: 16, archived: false},
  {name: '777 Rosewood St', description: ' building', street_address: '777 Rosewood St', city: 'St. Paul', state: 'MN', zip_code: 77090, media_url: 'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2013/10/MOE-Office-Building-Schmidt-Hammer-Lassen-lead.jpg', author_id: 16, archived: false}
  ])
