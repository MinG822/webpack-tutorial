import _ from 'lodash'
import './style.css'
import Icon from './abc.jpg'
import Data from './data.xml'
import Notes from './data.csv'
import tomlData from './data.toml'
import yamlData from './data.yaml'
import jsonData from './data.json5'

console.log(tomlData.title)
console.log(tomlData.owner.name)

console.log(yamlData.title)
console.log(yamlData.owner.name)

console.log(jsonData.title)
console.log(jsonData.owner.name)

function component() {
  const element = document.createElement('div')
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  const myIcon = new Image()
  myIcon.src = Icon

  element.appendChild(myIcon)

  console.log(Data)
  console.log(Notes)

  return element
}

document.body.appendChild(component())