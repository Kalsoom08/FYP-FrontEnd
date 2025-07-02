import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = (msg) => toast(msg);
Toast.success = (msg) => toast.success(msg);
Toast.error = (msg) => toast.error(msg);

export default Toast;
