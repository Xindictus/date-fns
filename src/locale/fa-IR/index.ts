import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @category Locales
 * @summary Persian/Farsi locale (Iran).
 * @language Persian
 * @iso-639-2 ira
 * @author Morteza Ziyae [@mort3za](https://github.com/mort3za)
 */
const locale: Locale = {
  code: 'fa-IR',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 6 /* Saturday */,
    firstWeekContainsDate: 1,
  },
}

export default locale
