function Scooter(year, color, model) {
  this.year = year
  this.color = color
  this.model = model
}

const Driver = (name, age, experience) => {
  
  this.name = name
  this.age = age
  this.experience = experience
  console.log(this)
}

Driver('h', 5, 3)