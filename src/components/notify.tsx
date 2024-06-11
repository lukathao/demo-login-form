import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

export const showToast = (msg: any, type="default") => {
    switch(type) {
        case "success":
            toast.success(msg);
            break;
        case "error":
            toast.error(msg);
            break;
        default:
            toast(msg);
            break;
    }

}

const Notify = () => {
    return <ToastContainer autoClose={2000} />
}

export default Notify;
