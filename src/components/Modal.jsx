import {useEffect, useState} from 'react';

const Modal = ({onClose }) => {
  const [animationClass, setAnimationClass] = useState('');
    useEffect(() => {
      setAnimationClass('modal-open');
      document.body.classList.add('overflow-hidden');
      return () =>{
        setAnimationClass('modal-close');
          document.body.classList.remove('overflow-hidden');
      }
    },[animationClass])

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${animationClass}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg z-10 ">
        <div className="flex items-center justify-between border-b p-4 rounded-t dark:border-gray-600">
        <h2 className="text-xl font-montserrat">Login</h2>
        <button type="button" onClick={onClose}
         className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
        </div>
        <div className="p-6">
        <form className="space-y-4" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex justify-between">
                       
                        <a href="#" className="text-sm text-rose-600 hover:underline dark:text-blue-500">Forgot password ?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center font-montserrat">Login</button>
                    <div className="text-xs  text-gray-500 dark:text-gray-300">
                    Don't have an account? <a href="#" className="text-sm text-rose-600 hover:underline">Create an account</a>
                    </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
