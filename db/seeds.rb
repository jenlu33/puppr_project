# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

demo = User.create!(username: 'demo-user', password: 'password')

user1 = User.create!(username: 'jen', password: 'password')
user2 = User.create!(username: 'doggosss', password: 'password')
user3 = User.create!(username: 'opark1346', password: 'password')
user4 = User.create!(username: 'pups4lyfe', password: 'password')
user5 = User.create!(username: 'shupocky', password: 'password')
user6 = User.create!(username: 'boopity', password: 'password')
user7 = User.create!(username: 'noobveen', password: 'password')


Photo.destroy_all

# demo's photos
photo1 = Photo.create!(user_id: demo.id, title: 'Doggo', caption: 'a doggo!')
  file = open('https://puppr-seeds.s3-us-west-1.amazonaws.com/p2.jpg')
  photo1.photo.attach(io: file, filename:'p2.jpeg')
photo2 = Photo.create!(user_id: demo.id, title: 'DOGGO!', caption: 'another doggo!')
  photo2.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/p1.jpeg'), filename:'p1.jpeg')

# user1's photos
photo5 = Photo.create!(user_id: user1.id, title: 'my doggo', caption: '')
  photo5.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/alvan-nee-9M0tSjb-cpA-unsplash.jpg'))
photo4 = Photo.create!(user_id: user1.id, title: 'my puppr', caption: '')
  photo4.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/baptist-standaert-mx0DEnfYxic-unsplash.jpg'))
photo18 = Photo.create!(user_id: user1.id, title: 'coooo doggo', caption: '')
  photo18.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/alvan-nee-9M0tSjb-cpA-unsplash.jpg'))
photo19 = Photo.create!(user_id: user1.id, title: 'supa coooot', caption: '')
  photo19.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/baptist-standaert-mx0DEnfYxic-unsplash.jpg'))
photo21 = Photo.create!(user_id: user1.id, title: 'supa coooot', caption: '')
  photo21.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/fredrik-ohlander.jpg'))

# user2's photos
photo3 = Photo.create!(user_id: user2.id, title: 'Friendship pups', caption: 'Puppy friends!')
  photo3.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/puppies.jpg'))
photo6 = Photo.create!(user_id: user2.id, title: 'Spot and Fluffy', caption: 'Spot and Fluffy loving the outside')
  photo6.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/alvan-nee-9M0tSjb-cpA-unsplash.jpg'))

# user3's photos
photo7 = Photo.create!(user_id: user3.id, title: 'Paco', caption: "It's Paco!")
  photo7.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/victor-grabarczyk.jpg'))
photo8 = Photo.create!(user_id: user3.id, title: 'Bailey', caption: "It's Bailey!")
  photo8.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/t-r-photography.jpg'))

# user4's photos
photo9 = Photo.create!(user_id: user4.id, title: 'Paco', 
  caption: "Huskies have a thick double coat that keeps them well insulated. 
  Their undercoat is short and warm, while the overcoat is long and water-resistant.")
  photo9.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/ash-goldsbrough-BEqYLPDaxkY-unsplash.jpg'))
photo10 = Photo.create!(user_id: user4.id, title: 'Bailey', 
  caption: "Huskies are not one-person dogs—they're unsuspicious and friendly to strangers.")
  photo10.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/radka-kocanova.jpg'))
photo20 = Photo.create!(user_id: user4.id, title: 'Bailey', 
  caption: "Siberian huskies are known for their wolfish good looks, but deep down, 
  they're all dog. ")
  photo20.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/husky.jpg'))
photo16 = Photo.create!(user_id: user4.id, title: 'Bailey', 
  caption: "Huskies made their American debut at the second year of the All Alaska 
  Sweepstakes Race in 1909. Rumor had it that these canines were superior sled dogs; 
  they proved the gossip true by dominating the racing competitions in Alaska for the following decade.")
  photo16.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/husky2.jpg'))

# user5's photos
photo11 = Photo.create!(user_id: user5.id, title: 'My Puppy', caption: "My cute puppy")
  photo11.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/elijah-m-henderson-65ZMOrY9eEg-unsplash.jpg'))
photo15 = Photo.create!(user_id: user5.id, title: 'Hanging Out', caption: '')
  photo15.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/erda-estremera-D1wiHCovGJ0-unsplash.jpg'))

# user6's photos
photo13 = Photo.create!(user_id: user6.id, title: 'Outside1', caption: "")
  photo13.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/harold-dixon.jpg'))
photo14 = Photo.create!(user_id: user6.id, title: 'Outside2', caption: "")
  photo14.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/joe-caione.jpg'))
photo12 = Photo.create!(user_id: user6.id, title: 'Outside3', caption: "")
  photo12.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/lui-peng.jpg'))

#user7's photos
photo21 = Photo.create!(user_id: user7.id, title: 'Meet Wilfred', caption: 'I got a new puppy today! His name is Wilfred.')
  photo21.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/naveen1.jpg'))
photo17 = Photo.create!(user_id: user7.id, title: 'Wilfred and Flower', caption: 'Wilfred found a flower')
  photo17.photo.attach(io: open('https://puppr-seeds.s3-us-west-1.amazonaws.com/naveen2.jpg'))