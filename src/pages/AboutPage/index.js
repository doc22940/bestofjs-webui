import React, { Component } from 'react'
import { connect } from 'react-redux'

import About from '../../components/about/About'
import log from '../../helpers/log'

class AboutPage extends Component {
  render() {
    log('Render the <AboutPage> container', this.props)
    const { staticContent, project, count, ui } = this.props
    return (
      <About
        project={project}
        staticContent={staticContent}
        count={count}
        ui={ui}
      />
    )
  }
}

function mapStateToProps(state) {
  const {
    entities: { projects },
    ui
  } = state
  return {
    count: Object.keys(projects).length,
    ui
  }
}

export default connect(
  mapStateToProps,
  {}
)(AboutPage)
