import { bench } from 'vitest'

import dayjs from './baseline/dayjs.min.js'
import utc from './baseline/plugin/utc.js'
import timezone from './baseline/plugin/timezone.js'

import dayjsPerf from './perf/dayjs.min.js'
import utcPerf from './perf/plugin/utc.js'
import timezonePerf from './perf/plugin/timezone.js'

dayjs.extend(utc)
dayjs.extend(timezone)

dayjsPerf.extend(utcPerf)
dayjsPerf.extend(timezonePerf)

bench('perf', () => {
  dayjsPerf.tz('2024-01-03 00:00:00', 'America/New_York').utcOffset()
})

bench('baseline', () => {
  dayjs.tz('2024-01-03 00:00:00', 'America/New_York').utcOffset()
})
