# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!(username: 'demo-user', password: 'password')

user1 = User.create!(username: 'jen', password: 'password')
user2 = User.create!(username: 'nej', password: 'password')
user3 = User.create!(username: 'opark1346', password: 'password')
user4 = User.create!(username: 'battlecat', password: 'password')
user5 = User.create!(username: 'shupocky', password: 'password')
user6 = User.create!(username: 'xamists', password: 'password')
user7 = User.create!(username: 'onelime', password: 'password')
user8 = User.create!(username: 'anomadicartist', password: 'password')
user8 = User.create!(username: 'nicolelodeon', password: 'password')
user9 = User.create!(username: 'taylor_hollismi', password: 'password')
user10 = User.create!(username: 'nabean', password: 'password')
user11 = User.create!(username: 'maltesefalcon95', password: 'password')