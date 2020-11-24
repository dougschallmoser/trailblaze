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
  avatar: 'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1543246239-7ae3ded686ec?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab',
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
  avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=d5849d81af587a09dbcf3f11f6fa122f',
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
  avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=73a9df4b7bd1b330db1e903e08575ec1',
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
  avatar: 'https://images.unsplash.com/photo-1544098485-2a2ed6da40ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=ddcb7ec744fc63472f2d9e19362aa387',
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
  avatar: 'https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=61eaea85f1aa3d065400179c78163f15',
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
  avatar: 'https://images.unsplash.com/photo-1509380836717-c4320ccf1a6f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=e01c8c45a063daaf6d6e571a32bd6c90',
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
  avatar: 'https://images.unsplash.com/photo-1498597531364-5944cd5388f4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=154bbabc57d958ef985edbd93c1cd051',
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
  avatar: 'https://images.unsplash.com/photo-1554384645-13eab165c24b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1502937406922-305bb2789e95?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=9ccf7504e3c56169185184198f642dcf',
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
  avatar: 'https://images.unsplash.com/photo-1510077143771-1b6a5ca97c3d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=618a9900d429329e336f3f08ea20ae1f',
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
  avatar: 'https://images.unsplash.com/photo-1504347538039-a53f6ff0131d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=ca7cc3097e24937904aadfe78b36780c',
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
  avatar: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1476956207128-beccf17c1771?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=52bbdebca6084fffac43984574db3038',
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
  avatar: 'https://images.unsplash.com/photo-1534385842125-8c9ad0bd123c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1498190718497-403407ff7eb2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a51c09ba28b70eace6e53adc15ae90ba',
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
  avatar: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1512473199894-0cee3b672650?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1569443693539-175ea9f007e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1548857036-7f4682ad871e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1514846117827-513efb7aa48a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1474533410427-a23da4fd49d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1574680594762-eb51a63408f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1577854807863-e13e704c97c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1541112324160-e8a425b58dac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1563240619-44ec0047592c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/flagged/photo-1531889236320-35bcb7d1a5fd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
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
  avatar: 'https://images.unsplash.com/photo-1493136289900-28660d718589?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  lat: 45.523064,
  lng: -122.676483,
  dob: Faker::Date.birthday(min_age: 18, max_age: 65)
)