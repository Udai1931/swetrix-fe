import { connect } from 'react-redux'
import { errorsActions } from 'redux/actions/errors'
import UIActions from 'redux/actions/ui'
import ViewProject from './ViewProject'

const mapStateToProps = (state) => ({
  projects: state.ui.projects.projects,
  isLoading: state.ui.projects.isLoading,
  cache: state.ui.cache.analytics,
  projectViewPrefs: state.ui.cache.projectViewPrefs,
  authenticated: state.auth.authenticated,
})

const mapDispatchToProps = (dispatch) => ({
  showError: (message) => {
    dispatch(errorsActions.genericError(message))
  },
  setProjectCache: (pid, period, timeBucket, data) => {
    dispatch(UIActions.setProjectCache(pid, period, timeBucket, data))
  },
  setProjectViewPrefs: (pid, period, timeBucket) => {
    dispatch(UIActions.setProjectViewPrefs(pid, period, timeBucket))
  },
  setPublicProject: (project) => {
    dispatch(UIActions.setPublicProject(project))
  },
  setLiveStatsForProject: (id, count) => {
    dispatch(UIActions.setLiveStatsForProject(id, count))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewProject)
