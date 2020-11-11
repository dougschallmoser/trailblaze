require 'faker'

# Users

User.create(
  username: "doug",
  password: "monkey",
  bio: Faker::Hipster.sentence(word_count: 25),
  avatar: Faker::Avatar.image(size: "100x100"),
  lat: 48.752230399999995,
  lng: -122.49006080000001
)

  User.create(
  username: "erin",
  password: "monkey",
  bio: Faker::Hipster.sentence(word_count: 25),
  avatar: Faker::Avatar.image(size: "100x100"),
  lat: 47.261058,
  lng: -122.167780
)

# BELLINGHAM

userss_list = []

10.times do
  username = Faker::Name.first_name
  password = Faker::Internet.password(min_length: 8)
  bio = Faker::Hipster.sentence(word_count: 25)
  avatar = Faker::Avatar.image(size: "100x100")
  lat = 48.762696
  lng = -122.436228

  userss_list << [username, password, bio, avatar, lat, lng]

end

userss_list.each do |username, password, bio, avatar, lat, lng|
  User.create(username: username, password: password, bio: bio, avatar: avatar, lat: lat, lng: lng)
end


# SEATTLE

user_list = []

10.times do
  username = Faker::Name.first_name
  password = Faker::Internet.password(min_length: 8)
  bio = Faker::Hipster.sentence(word_count: 25)
  avatar = Faker::Avatar.image(size: "100x100")
  lat = 47.607957
  lng = -122.322040

  user_list << [username, password, bio, avatar, lat, lng]

end

user_list.each do |username, password, bio, avatar, lat, lng|
  User.create(username: username, password: password, bio: bio, avatar: avatar, lat: lat, lng: lng)
end


# PORTLAND

users_list = []

10.times do
  username = Faker::Name.first_name
  password = Faker::Internet.password(min_length: 8)
  bio = Faker::Hipster.sentence(word_count: 25)
  avatar = Faker::Avatar.image(size: "100x100")
  lat = 45.460522
  lng = -122.611955

  users_list << [username, password, bio, avatar, lat, lng]

end

users_list.each do |username, password, bio, avatar, lat, lng|
  User.create(username: username, password: password, bio: bio, avatar: avatar, lat: lat, lng: lng)
end
