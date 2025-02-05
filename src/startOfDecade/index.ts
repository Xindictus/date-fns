import toDate from '../toDate/index'

/**
 * @name startOfDecade
 * @category Decade Helpers
 * @summary Return the start of a decade for the given date.
 *
 * @description
 * Return the start of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a decade
 *
 * @example
 * // The start of a decade for 21 October 2015 00:00:00:
 * const result = startOfDecade(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2010 00:00:00
 */
export default function startOfDecade<DateType extends Date>(
  date: DateType | number | string
): DateType {
  const _date = toDate(date)
  const year = _date.getFullYear()
  const decade = Math.floor(year / 10) * 10
  _date.setFullYear(decade, 0, 1)
  _date.setHours(0, 0, 0, 0)
  return _date
}
