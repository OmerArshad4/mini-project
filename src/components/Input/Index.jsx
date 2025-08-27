import React from 'react'

const CustomInputField = ({
    type,
    name,
    label,
    error,
    value,
    style,
    // toolTip,
    disabled,
    required,
    mainClass,
    className,
    placeholder,
    ToolTipClass,
    onBlurHandle,
    onChangeHandle,
}) => {
  return (
   <div>
     
      <input
        placeholder={placeholder}
        type={type}
        name={name}                
        value={value}
        disabled={disabled}
        onBlur={onBlurHandle}        
        onChange={onChangeHandle}   
      />
      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  )
}

export default CustomInputField