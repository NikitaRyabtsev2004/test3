export default function solution(content) {
  // BEGIN
  const rows = content.split('\n').slice(2)
  console.log(`Всего растений: ${rows.length}`)
  const data = rows.map(row=>row.split('|').filter(row=>row)).map(row => row.map(element => element.trim()))

  const names =data.map(row => row[0])
  const sortedNames = names.map((name) => name[0].toUpperCase() + name.slice(1)).sort()
  console.log(sortedNames)
  
  const isDangerous = data.map((row) => row[4])
  const dangerousPlants = isDangerous.filter((dangerous) => dangerous === 'Да').length
  const notDangerousPlants = isDangerous.filter((dangerous) => dangerous === 'Нет').length
  console.log(`Всего ядовитых: ${(100 / names.length) * dangerousPlants}%. \nВсего не ядовитых: ${(100 / names.length) * notDangerousPlants}% `)
 
  const forestPlants = data.filter(row => row[1].split(',')[0] ==='Леса')
  const calcAverage = (years) => {
    if (years.includes('-')) {
      return (Number(years.split('-')[0]) + Number(years.split('-')[1].split(' ')[0])) /2
    } return Number(years.split(' ')[0])
  }
  const forestYears = forestPlants.map(row => calcAverage(row[3]))
  const ageTotal = forestYears.reduce((acc, elem) => acc + elem)
  
   console.log(`Средний возраст для всех лесных растений: ${Math.round(ageTotal / forestYears.length)} лет`)

   const dangerousOnlyRows = data.filter(row => row[4] ==='Да')
   const dangerousHabitatas = dangerousOnlyRows.map((row) => row[1].split(', ').map(place => place[0].toUpperCase() + place.slice(1)))
   console.log(dangerousHabitatas)
  // END
} 