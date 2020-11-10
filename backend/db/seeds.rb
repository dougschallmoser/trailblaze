require 'faker'

# Users

User.create(
  username: "doug",
  password: "monkey",
  bio: Faker::Lorem.sentence(word_count: 20),
  avatar: Faker::Avatar.image(size: "100x100"),
  lat: 48.752230399999995,
  lng: -122.49006080000001
  )

  User.create(
  username: "erin",
  password: "monkey",
  bio: Faker::Lorem.sentence(word_count: 20),
  avatar: Faker::Avatar.image(size: "100x100"),
  lat: 47.261058,
  lng: -122.167780
  )

  User.create(
  username: "mom",
  password: "monkey",
  bio: Faker::Lorem.sentence(word_count: 20),
  avatar: Faker::Avatar.image(size: "100x100"),
  lat: 48.043431,
  lng: -120.847285
  )