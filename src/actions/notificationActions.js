import * as types from './actionTypes';
import notificationsApi from '../api/mockNotificationApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadNotificationsSuccess(notifications) {
  return { type: types.LOAD_NOTIFICATIONS_SUCCESS, notifications};
}

export function loadNotifications() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return notificationsApi.getAllNotifications().then(notifications => {
      dispatch(loadNotificationsSuccess(notifications));
    }).catch(error => {
      throw(error);
    });
  };
}