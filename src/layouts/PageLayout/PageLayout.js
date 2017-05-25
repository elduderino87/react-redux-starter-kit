import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { NavigationMenu } from '../components/NavigationMenu'
import { connect } from 'react-redux'
import './PageLayout.scss'

class PageLayout extends React.Component {
  render() {
    return (
      <div className='container text-center'>
        <h1>React Redux Starter Kit</h1>
        <NavigationMenu loading={this.props.loading} newNotificationsCount={this.props.newNotificationsCount} />
        <div className='page-layout__viewport'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
PageLayout.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  newNotificationsCount: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    newNotificationsCount: state.notifications.filter(x=>x.isNew).length
  };
}

export default connect(mapStateToProps)(PageLayout);
