import React, { memo } from 'react'
import cx from 'clsx'
import PropTypes from 'prop-types'

const Checkbox = ({
  label, hint, id, name, className, onChange, checked,
}) => {
  const identifier = id || name

  return (
    <div className={cx('relative flex items-start whitespace-pre-line', className)}>
      <div className='flex items-center h-5'>
        <input
          id={identifier}
          aria-describedby={`${identifier}-description`}
          name={name}
          type='checkbox'
          checked={checked}
          onChange={onChange}
          className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded cursor-pointer'
        />
      </div>
      <div className='ml-3 text-sm'>
        <label htmlFor={identifier} className='font-medium text-gray-700 dark:text-gray-200 cursor-pointer'>{label}</label>
        {hint && (
          <p id={`${identifier}-description`} className='text-gray-500 dark:text-gray-300'>{hint}</p>
        )}
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string, PropTypes.node,
  ]).isRequired,
  checked: PropTypes.bool.isRequired,
  hint: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
}

Checkbox.defaultProps = {
  label: '',
  hint: '',
  onChange: () => { },
  id: '',
  className: '',
  name: '',
}

export default memo(Checkbox)
