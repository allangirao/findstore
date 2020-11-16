import React from 'react'

const weekdaysExpansion = new Map([
  ['Su', 'Sun'],
  ['Mo', 'Mon'],
  ['Tu', 'Tue'],
  ['We', 'Wed'],
  ['Th', 'Thu'],
  ['Fr', 'Fri'],
  ['Sa', 'Sat']
])

const translateOpeningHours = text => {
  let hours = text
  for (const [key, value] of weekdaysExpansion.entries()) {
    hours = hours.replace(key, value)
  }
  return hours
}

const Phone = ({ number = null }) =>
  number
  ? <div>{number}</div>
  : null

const Website = ({ url = null }) =>
  url
  ? <div>{url}</div>
  : null

const OpeningHours = ({ value = null }) => {
  if (value === null) return null
  const dayHours = translateOpeningHours(value)
  return (
    <div>
      {dayHours}
    </div>
  )
}

const StoreDetail = (props) => {
  const { store = {} } = props
  const { tags } = store
  const { name, phone = null, website = null } = tags
  const { opening_hours = null} = tags
  return (
    <div>
      {name}
      <Phone number={phone} />
      <Website url={website} />
      <OpeningHours value={opening_hours} />
    </div>
  )
}

export default StoreDetail
