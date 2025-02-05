/* eslint-env mocha */

import assert from 'assert'
import { describe, it } from 'vitest'
import eachWeekendOfInterval from './index'

describe('eachWeekendOfInterval', () => {
  it('returns all weekends within the interval', () => {
    const result = eachWeekendOfInterval({
      start: new Date(2018, 8 /* Sept */, 17),
      end: new Date(2018, 8 /* Sept */, 30),
    })
    assert.deepStrictEqual(result, [
      new Date(2018, 8 /* Sept */, 22),
      new Date(2018, 8 /* Sept */, 23),
      new Date(2018, 8 /* Sept */, 29),
      new Date(2018, 8 /* Sept */, 30),
    ])
  })

  it('returns all weekends within the interval when starting on a weekend', () => {
    const result = eachWeekendOfInterval({
      start: new Date(2018, 8 /* Sept */, 22),
      end: new Date(2018, 8 /* Sept */, 30),
    })
    assert.deepStrictEqual(result, [
      new Date(2018, 8 /* Sept */, 22),
      new Date(2018, 8 /* Sept */, 23),
      new Date(2018, 8 /* Sept */, 29),
      new Date(2018, 8 /* Sept */, 30),
    ])
  })

  it('returns reversed array if the start date is after the end date', () => {
    const result = eachWeekendOfInterval({
      start: new Date(2018, 8 /* Sept */, 30),
      end: new Date(2018, 8 /* Sept */, 17),
    })
    assert.deepStrictEqual(result, [
      new Date(2018, 8 /* Sept */, 30),
      new Date(2018, 8 /* Sept */, 29),
      new Date(2018, 8 /* Sept */, 23),
      new Date(2018, 8 /* Sept */, 22),
    ])
  })

  it('returns an empty array if the start date is `Invalid Date`', () => {
    const result = eachWeekendOfInterval({
      start: new Date(NaN),
      end: new Date(2019, 11 /* Dec */, 31),
    })
    assert.deepStrictEqual(result, [])
  })

  it('returns an empty array if the end date is `Invalid Date`', () => {
    const result = eachWeekendOfInterval({
      start: new Date(2019, 0 /* Jan */, 1),
      end: new Date(NaN),
    })
    assert.deepStrictEqual(result, [])
  })

  it('returns an empty array if both of the properties are `Invalid Date`', () => {
    const result = eachWeekendOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    })
    assert.deepStrictEqual(result, [])
  })
})
