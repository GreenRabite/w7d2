# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todos = Todo.create([
  { title: 'Star Wars', body: "Sharpen lightsaber", done: false },
  { title: 'Lord of the Rings', body: "Find the ONE ring", done: false },
  { title: 'Hearthstone', body: "Become Legend", done: false },
  { title: 'Halo', body: "Save the world, become the CHIEF", done: false },
  { title: 'LoL', body: "RAGEDDDDDD QUIT", done: false },
  { title: 'Overwatch', body: "Get banned brooo", done: true },
  { title: 'Clash of Clans', body: "Grind buddy, bring on the grind =/", done: true }
  ])
