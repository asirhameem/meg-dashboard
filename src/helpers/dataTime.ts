import dayjs from 'dayjs';
import { TDateTimeFormat } from '../interfaces'

export const formatDateTime = (dateTime: string, format: TDateTimeFormat) => {
  switch (format) {
    case 'DD/MM/YYYY':
      return dayjs(dateTime).format('DD/MM/YYYY');
    case 'DD/MM/YYYY HH:mm':
      return dayjs(dateTime).format('DD/MM/YYYY HH:mm');
    case 'DD/MM/YYYY HH:mm:ss':
      return dayjs(dateTime).format('DD/MM/YYYY HH:mm:ss');
    case 'dddd, MMMM D, YYYY':
      return dayjs(dateTime).format('dddd, MMMM D, YYYY');
    default:
      break;
  }
}