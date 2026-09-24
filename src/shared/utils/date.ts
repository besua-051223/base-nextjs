import { dayjs } from '@/lib';
import { APP_TIMEZONE } from '@/shared/constants';

export function utcToLocal(dateStr: string): dayjs.Dayjs {
  return dayjs.utc(dateStr).tz(APP_TIMEZONE);
}

export function localToUtc(dateStr: string): dayjs.Dayjs {
  return dayjs.tz(dateStr, APP_TIMEZONE).utc();
}

export function formatDate(value: string, format: string = 'DD/MM/YYYY') {
  const date = utcToLocal(value);
  return date.isValid() ? date.format(format) : '--/--/----';
}

export function formatTime(value: string) {
  const date = utcToLocal(value);
  return date.isValid() ? date.format('HH:mm') : '--:--';
}

export function formatTimeRange(start: string, end: string) {
  return `${formatTime(start)} - ${formatTime(end)}`;
}
