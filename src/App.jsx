import { ToastContainer, toast } from 'react-toastify';
import ToastifyNotification from './components/ToastifyNotification';

function App() {

  return (
    <div className='flex justify-center items-center w-full h-screen'>
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
