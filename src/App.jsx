import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HallStatement } from './Pages/Public/HallStatement';

const App = () => {
  return (
    <div>
      <HallStatement />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App