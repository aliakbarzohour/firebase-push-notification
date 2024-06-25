import { ToastContainer, toast } from 'react-toastify';
import ToastifyNotification from './components/ToastifyNotification';

function App() {

  return (
    <>
      <button
        className="btn-primary"
        onClick={() => toast(<ToastifyNotification title="پیام جدییید" body="اگه این پیامو دیدین , خوشحال بشید  چون داره کار میکنه" />)}
      >
        نشون دادن نوتیف
      </button>

      <ToastContainer hideProgressBar />
    </>
  )
}

export default App
