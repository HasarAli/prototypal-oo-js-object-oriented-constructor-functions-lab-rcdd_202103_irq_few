function Scooter(year, color, model) {
  this.year = year
  this.color = color
  this.model = model
}

const Driver = (name, age, experience) => {
  console.log(this)
  this.name = name
  this.age = age
  this.experience = experience
}

new Driver('h', 5, 3)