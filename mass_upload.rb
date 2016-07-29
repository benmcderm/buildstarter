urls = ['http://www.iamnotastalker.com/wp-content/uploads/2012/04/P1040254-001.jpg',
'http://img06.deviantart.net/2031/i/2011/107/0/5/apartment_building___evening_by_dave5264-d3e7ol6.jpg',
'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
'https://si.wsj.net/public/resources/images/BN-NN734_0414pp_12S_20160413160150.jpg',
'https://upload.wikimedia.org/wikipedia/commons/7/74/American_Apartment_Building_-_Portland_Oregon.jpg',
'https://northseattlesarah.files.wordpress.com/2011/11/1799_001.jpg',
'http://www.hhlarchitects.com/images/2-4-3-285-delaware.jpg',
'http://cdn.patch.com/users/86497/2015/02/T800x600/20150254d10950d82cf.jpg',
'http://www.designboom.com/wp-content/uploads/2014/11/hiroyuki-ito-architects-bloom-apartments-tokyo-japan-designboom-01.jpg',
'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2013/10/MOE-Office-Building-Schmidt-Hammer-Lassen-lead.jpg',
'http://concordprojects.com/wp-content/uploads/2014/09/concordia-hip-and-knee-mg.jpg',
'http://ukrevival.net/files/2014/07/house.jpg',
'https://upload.wikimedia.org/wikipedia/commons/c/cd/Knight-Wood_House.JPG',
'https://pixabay.com/static/uploads/photo/2013/08/30/12/56/holiday-house-177401_960_720.jpg',
'http://howisavemoney.net/wp-content/uploads/2011/04/House.jpg',
'http://www.conway-homes.com/wp-content/uploads/2016/03/shipman-house-front-best-2.jpg.1140x481_0_219_11132.jpg',
'https://67.media.tumblr.com/f01c7019e75cd65ebcdbe0f1cc8ad4aa/tumblr_inline_o8rt4yx8z11sgm97w_1280.jpg',
'http://cdn.trendir.com/wp-content/uploads/old/house-design/netherlands-glass-house-1.jpg',
'http://bestdsgn.com/wp-content/uploads/2015/08/furniture-exterior-awesome-brown-wood-modern-rustic-design-small-wood-house-be-equuipped-teak-wall-and-windows-fence-door-glass-skylight-cornice-outdoor-at-garden-with-house-designs-ideas-also-design.jpg',
'http://gethousedecor.com/wp-content/uploads/2014/12/Beautiful-House-Exteriors-Modern-Architecture.jpg',
'http://viaimmobiler.com/wp-content/uploads/2016/05/modern-commercial-building-plans-la-cubo-commercial-building-design-architecture-p38001.jpg',
'http://www.buildingbutler.com/images/gallery/large/building-facades-4994-12025.jpg',
'http://www.technected.com/wp-content/uploads/2015/09/why-bricks-mortar-business-presence-still-matters-digital-world.jpg',
'http://www.e-architect.co.uk/images/jpgs/vietnam/lac_trung_software_city_to120109_1.jpg',
'http://c1038.r38.cf3.rackcdn.com/group1/building5172/media/Faba_%20nigt%20view.jpg']

images = []

urls.each do |url|
  ul = Cloudinary::Uploader.upload(url, {api_key: 361222386386892, api_secret: '1yTKsyZjxd6Egi92Mh5_bGqUhSs', cloud_name: 'di7w4wcnw'})
  images << ul["secure_url"]
end

p images
