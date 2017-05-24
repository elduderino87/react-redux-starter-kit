import delay from './delay';
const notifications = [
    {
        type: 'selfPlacement',
        title: 'Self Placement #1',
        content: 'You have been assigned self placmeent #1 at Fitzroy medical center'
    },
    {
        type: 'selfPlacement',
        title: 'Self Placement #2',
        content: 'You have been assigned self placmeent #2 at Fitzroy medical center'
    },
    {
        type: 'selfPlacement',
        title: 'Self Placement #3',
        content: 'You have been assigned self placmeent #3 at Fitzroy medical center'
    }
];
class NotificationApi {
    static getAllNotifications() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], notifications));
            }, delay);
        });
    }
}
export default NotificationApi;