import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './HomeView.scss'
import Todo from './TodoView'
import Notifications from './NotificationsView'

class HomeView extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { notifications } = this.props;

    return (
      <div className='homepage'>
        <h4>Dashboard</h4>
        <section className='l-flex'>
          <article className='homepage__widget'>
            <Todo />
          </article>
          <article className='homepage__widget'>
            <Notifications notifications={notifications} />
          </article>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notifications: state.notifications
  };
}

export default connect(mapStateToProps)(HomeView);