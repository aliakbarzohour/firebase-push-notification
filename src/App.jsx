import { ToastContainer, toast } from 'react-toastify';
import ToastifyNotification from './components/ToastifyNotification';
import { useEffect, useState } from 'react';
import { getFirebaseToken, onForegroundMessage } from './firebase';

function App() {
  const [showNotificationBanner, setShowNotificationBanner] = useState(Notification.permission === 'default');

  const handleGetFirebaseToken = () => {
    getFirebaseToken()
      .then((firebaseToken) => {
        console.log('Firebase token: ', firebaseToken);
        if (firebaseToken) {
          setShowNotificationBanner(false);
        }
      })
      .catch((err) => console.error('An error occured while retrieving firebase token. ', err))
  }
  useEffect(() => {
    onForegroundMessage()
      .then((payload) => {
        console.log('Received foreground message: ', payload);
        const { notification: { title, body } } = payload;
        toast(<ToastifyNotification title={title} body={body} />);
      })
      .catch(err => console.log('An error occured while retrieving foreground message. ', err));
  }, []);
  return (

    <div className='flex justify-center items-center w-full h-screen'>
      {showNotificationBanner && <div className="notification-banner">
        <span>The app needs permission to</span>
        <a
          href="#"
          className="notification-banner-link"
          onClick={handleGetFirebaseToken}
        >
          enable push notifications.
        </a>
      </div>}
      <button
        className="py-3 px-8 rounded-xl text-center bg-orange-600 text-white"
        onClick={() => toast(<ToastifyNotification title="پیام جدییید" body="اگه این پیامو دیدین , خوشحال بشید  چون داره کار میکنه" />)}
      >
        نشون دادن نوتیف
      </button>

      <ToastContainer hideProgressBar />
    </div>
  )
}

export default App
