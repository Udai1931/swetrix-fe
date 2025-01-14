import { put, call, delay, select } from 'redux-saga/effects'
import Debug from 'debug'

import { getGeneralStats } from 'api'
import UIActions from 'redux/actions/ui'
import { GENERAL_STATS_UPDATE_INTERVAL } from 'redux/constants'

const debug = Debug('swetrix:rx:s:general-stats')

export default function* generalStats() {
  while (true) {
    const isAuthenticated = yield select(state => state.auth.authenticated)
    if (isAuthenticated) {
      continue
    }

    try {
      const stats = yield call(getGeneralStats)

      yield put(UIActions.setGeneralStats(stats))
    } catch (e) {
      debug('Error while getting general stats data: %s', e)
    }

    yield delay(GENERAL_STATS_UPDATE_INTERVAL)
  }
}
