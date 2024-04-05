import React from "react";

type Props = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalBox = ({ title, onClose, children }: Props) => {
  return (
    <>
      <div
        id="default-modal"
        tabIndex={-1}
        aria-modal={true}
        role="dialog"
        className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full border-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm backdrop-saturate-150 transition-all duration-300 ease-in-out"
      >
        <div className="relative p-4 w-full max-w-fit max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                {title}
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal" onClick={onClose}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              {children}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default ModalBox;