import React, { Component } from 'react'
import PropTypes from 'prop-types'

const didMountWrapper = WrappedComponent => {
  class Wrapper extends Component {
    componentDidMount() {
      this.props.didMount(this.props);
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  return Wrapper;
}

didMountWrapper.propTypes = {
  willMount: PropTypes.func.isRequired
}

export default didMountWrapper;