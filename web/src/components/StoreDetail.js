import React from 'react'

const apiDayToPtbr = {
  'Su': 'Dom',
  'Mo': 'Seg',
  'Tu': 'Ter',
  'We': 'Qua',
  'Th': 'Qui',
  'Fr': 'Sex',
  'Sa': 'Sáb'
}

const translateDay = day => apiDayToPtbr[day.trim()]

const translateDays = text => {
  const dayIntervals = text.split(',')
  return dayIntervals.map(interval =>
    interval.includes('-')
    ? interval.split('-').map(translateDay).join(' à ')
    : translateDay(interval)
  ).join(', ')
}

const translateDayHour = text => {
  const pattern = /^(\D+)(.*)$/ // separate days and hours
  const matches = text.match(pattern)
  const days = matches[1]
  const hours = matches[2]

  return translateDays(days) + ' ' + hours
}

const translateOpeningHours = text => {
  if (text === '24/7') {
    return ['Domingo à domingo, 24 horas']
  }
  const itens = text.split(';')
  return itens.map(translateDayHour)
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
      {dayHours.map(text =>
        <>{text}<br/></>
      )}
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
