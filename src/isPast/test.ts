/* eslint-env mocha */

import assert from 'assert'
import { describe, it, beforeEach, afterEach } from 'vitest'
import sinon from 'sinon'
import isPast from './index'

describe('isPast', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is in the past', () => {
    const result = isPast(new Date(2014, 6 /* Jul */, 2))
    assert(result === true)
  })

  it('returns false if the given date is in the future', () => {
    const result = isPast(new Date(2014, 11 /* Dec */, 31))
    assert(result === false)
  })

  it('returns false if the given date is now', () => {
    const result = isPast(new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isPast(new Date(2014, 6 /* Jul */, 2).getTime())
    assert(result === true)
  })
})
