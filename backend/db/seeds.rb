require 'faker'

# Users

User.create(
  username: "doug",
  password: "monkey",
  bio: Faker::Hipster.sentence(word_count: 25),
  avatar: Faker::Avatar.image(size: "100x100"),
  lat: 48.752230399999995,
  lng: -122.49006080000001,
  dob: "1987-10-14"
)

  User.create(
  username: "erin",
  password: "monkey",
  bio: Faker::Hipster.sentence(word_count: 25),
  avatar: Faker::Avatar.image(size: "100x100"),
  lat: 47.261058,
  lng: -122.167780,
  dob: "1985-12-04"
)

# BELLINGHAM

userss_list = []

10.times do
  username = Faker::Name.first_name
  password = Faker::Internet.password(min_length: 8)
  bio = Faker::Hipster.sentence(word_count: 25)
  avatar = Faker::Avatar.image(size: "100x100")
  dob = Faker::Date.birthday(min_age: 18, max_age: 65)
  lat = 48.762696
  lng = -122.436228

  userss_list << [username, password, bio, avatar, lat, lng, dob]

end

userss_list.each do |username, password, bio, avatar, lat, lng, dob|
  User.create(username: username, password: password, bio: bio, avatar: avatar, lat: lat, lng: lng, dob: dob)
end


# SEATTLE

user_list = []

10.times do
  username = Faker::Name.first_name
  password = Faker::Internet.password(min_length: 8)
  bio = Faker::Hipster.sentence(word_count: 25)
  avatar = Faker::Avatar.image(size: "100x100")
  dob = Faker::Date.birthday(min_age: 18, max_age: 65)
  lat = 47.607957
  lng = -122.322040

  user_list << [username, password, bio, avatar, lat, lng, dob]

end

user_list.each do |username, password, bio, avatar, lat, lng, dob|
  User.create(username: username, password: password, bio: bio, avatar: avatar, lat: lat, lng: lng, dob: dob)
end


# PORTLAND

users_list = []

10.times do
  username = Faker::Name.first_name
  password = Faker::Internet.password(min_length: 8)
  bio = Faker::Hipster.sentence(word_count: 25)
  avatar = Faker::Avatar.image(size: "100x100")
  dob = Faker::Date.birthday(min_age: 18, max_age: 65)
  lat = 45.460522
  lng = -122.611955

  users_list << [username, password, bio, avatar, lat, lng, dob]

end

users_list.each do |username, password, bio, avatar, lat, lng, dob|
  User.create(username: username, password: password, bio: bio, avatar: avatar, lat: lat, lng: lng, dob: dob)
end
