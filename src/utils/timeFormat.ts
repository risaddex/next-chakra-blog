import { formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale"

const parseTime = (date: Date) => {
  const timeFormat = new Intl.DateTimeFormat('pt-br', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit',
    year: 'numeric',
    month: '2-digit',
    minute: 'numeric',
    hour: 'numeric',
  })

  return timeFormat.format(new Date(date))
}

const parseRelativeTime = (updateDate: Date) => {


  return formatDistance(new Date(updateDate), new Date(), {
    addSuffix: true,
    locale: ptBR,
  })
}

export { parseTime, parseRelativeTime }
