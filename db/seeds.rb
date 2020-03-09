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
# user2 = User.create!(username: 'nej', password: 'password')
# user3 = User.create!(username: 'opark1346', password: 'password')
# user4 = User.create!(username: 'pups4lyfe', password: 'password')
# user5 = User.create!(username: 'shupocky', password: 'password')
# user6 = User.create!(username: 'xamists', password: 'password')
# user7 = User.create!(username: 'onelime', password: 'password')
# user8 = User.create!(username: 'anomadicartist', password: 'password')
# user8 = User.create!(username: 'nicolelodeon', password: 'password')
# user9 = User.create!(username: 'doggosss', password: 'password')
# user10 = User.create!(username: 'nabean', password: 'password')
# user11 = User.create!(username: 'maltesefalcon95', password: 'password')

Photo.destroy_all

photo1 = Photo.create!(user_id: user1.id, title: 'doggo', caption: 'a doggo!')
# photo1.photo.attach(io: open("https://puppr-dev.s3-us-west-1.amazonaws.com/bCedQmDXo1C7cjruKBDW3Cs2"), filename:'p1.jpeg')

photo2 = Photo.create!(user_id: user1.id, title: 'doggo2', caption: 'a doggo!')
photo3 = Photo.create!(user_id: user1.id, title: 'doggo3', caption: 'a doggo!')
photo4 = Photo.create!(user_id: user1.id, title: 'doggo4', caption: 'a doggo!')
