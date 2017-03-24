import * as api from './api'
import Position from './transactions/Positions/position'

// using REST API to retrieve position and then amend it
api.configure({env: "test"})
api.Positions.retrieve({id: 1}).then(position => {
  // position object has amend function
  console.log(`[api] position quantity: ${position.quantity}`)
  position.amend({someKey: "newValue"}).then(result => {
    console.log(`[api] amend result: ${result}`)
  })
})

// using Position class without REST API
let position = new Position({quantity: 4.0})
console.log(`position quantity: ${position.quantity}`)
