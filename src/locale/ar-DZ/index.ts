import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'
import type { Locale } from '../types'

/**
 * @category Locales
 * @summary Arabic locale (Algerian Arabic).
 * @language Algerian Arabic
 * @iso-639-2 ara
 * @author Badreddine Boumaza [@badre429](https://github.com/badre429)
 * @author Ahmed ElShahat [@elshahat](https://github.com/elshahat)
 */
const locale: Locale = {
  code: 'ar-DZ',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
}

export default locale
