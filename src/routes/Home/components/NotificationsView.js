import React from 'react';
import PropTypes from 'prop-types'
import './NotificationsView.scss'

export const NotificationsView = ({ notifications }) => (
    <div>
        <h4>Notifications View!</h4>
        <ul>

            {notifications.map(notif =>
                <li key={notif.id}>
                    <div>
                        {notif.title} {notif.isNew ? <i>New</i> : ''}
                    </div>
                </li>
            )}
        </ul>
    </div>
)
NotificationsView.propTypes = {
  notifications: PropTypes.array.isRequired
};

export default NotificationsView