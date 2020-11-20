require 'faker'

# Users

User.create(
  name: "Doug",
  email: "doug@gmail.com",
  password: "monkey",
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://github.com/dougschallmoser.png',
  lat: 48.752230399999995,
  lng: -122.49006080000001,
  dob: "1987-10-14"
)

User.create(
  name: "Erin",
  email: "erin@gmail.com",
  password: "monkey",
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/amandabuzard/128.jpg',
  lat: 47.261058,
  lng: -122.167780,
  dob: "1985-12-04"
)

User.create(
  name: "Noah",
  email: "noah@gmail.com",
  password: "monkey",
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/fabbianz/128.jpg',
  lat: 47.261058,
  lng: -122.167780,
  dob: "1997-10-16"
)

# BELLINGHAM

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mactopus/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adrienths/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/benefritz/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "nonbinary",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/raquelwilson/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/xtopherpaul/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jimmuirhead/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/curiousonaut/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/amywebbb/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/lepetitogre/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "nonbinary",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg',
  lat: 48.769768,
  lng: -122.485886,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)


# SEATTLE

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/eitarafa/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/findingjenny/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/artem_kostenko/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyisonline/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/commadelimited/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kkusaa/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/al_li/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jehnglynn/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ganserene/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "nonbinary",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/madcampos/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "nonbinary",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/garand/128.jpg',
  lat: 47.6062095,
  lng: -122.3320708,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)


# PORTLAND

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/alagoon/128.jpg',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mrjamesnoble/128.jpg',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/divya/128.jpg',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "nonbinary",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/wintopia/128.jpg',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dicesales/128.jpg',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "male",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/madysondesigns/128.jpg',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/snowwrite/128.jpg',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dutchnadia/128.jpg',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "female",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sandywoodruff/128.jpg',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)

User.create(
  name: Faker::Name.first_name,
  email: Faker::Internet.email,
  password: Faker::Internet.password(min_length: 8),
  bio: Faker::Hipster.sentence(word_count: 15),
  gender: "nonbinary",
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/craigrcoles/128.jpg',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)