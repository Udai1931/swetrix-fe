import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'clsx'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import { ExclamationIcon } from '@heroicons/react/outline'
import { InformationCircleIcon } from '@heroicons/react/outline'

const Modal = ({
  className, type, title, message, isOpened, onClose, onSubmit, closeText, submitText, submitType,
}) => {
  return (
    <Transition.Root show={isOpened} as={Fragment}>
      <Dialog as='div' className={cx('fixed z-10 inset-0 overflow-y-auto', className)} open={isOpened} onClose={onClose} static>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:px-5 sm:py-4'>
              <div className='sm:flex sm:items-start'>
                {type === 'success' && (
                  <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>
                    <CheckIcon className='h-6 w-6 text-green-600' aria-hidden='true' />
                  </div>
                )}
                {type === 'error' && (
                  <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                    <ExclamationIcon className='h-6 w-6 text-red-600' aria-hidden='true' />
                  </div>
                )}
                {type === 'info' && (
                  <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10'>
                    <InformationCircleIcon className='h-6 w-6 text-blue-600' aria-hidden='true' />
                  </div>
                )}
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                    {title}
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500 whitespace-pre-line'>
                      {message}
                    </p>
                  </div>
                </div>
              </div>
              <div className='px-4 py-3 sm:px-0 sm:pb-0 sm:flex sm:flex-row-reverse'>
                {submitText && (
                  <button
                    type='button'
                    className={cx('w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm', {
                      'bg-indigo-600 hover:bg-indigo-700': submitType === 'regular',
                      'bg-red-600 hover:bg-red-700': submitType === 'danger',
                    })}
                    onClick={onSubmit}
                  >
                    {submitText}
                  </button>
                )}
                {closeText && (
                  <button
                    type='button'
                    className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={onClose}
                  >
                    {closeText}
                  </button>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

Modal.propTypes = {
  type: PropTypes.oneOf(['error', 'success', 'info']),
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string,
  className: PropTypes.string,
  isOpened: PropTypes.bool,
  onSubmit: PropTypes.func,
  closeText: PropTypes.string,
  submitText: PropTypes.string,
  submitType: PropTypes.oneOf(['regular', 'danger']),
}

Modal.defaultProps = {
  className: '',
  message: '',
  isOpened: false,
  onSubmit: () => { },
  closeText: null,
  submitText: null,
  submitType: 'regular',
  type: null,
}

export default memo(Modal)
