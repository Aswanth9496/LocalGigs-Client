import React from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa'


interface FormInputProps {
    label:string;
    placeholder:string;
    icon:React.ReactNode;
    type?:string;
    value:string;
    error?:string;
    onChange:(val:string)=>void;
    showPasswordToggle?: boolean;
    showPassword?: boolean;
    setShowPassword?: (val: boolean) => void;
}


const FormInput = React.memo( ({
  label,
  placeholder,
  icon,
  type = "text",
  value,
  error,
  onChange,
  showPasswordToggle,
  showPassword,
  setShowPassword,
}: FormInputProps) => {


  return (
    <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">{label}</label>
        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#4A9782]">
          <span className="text-gray-400 mr-2">{icon}</span>
          <input
          type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-grow outline-none text-gray-900 placeholder-gray-400"
          />
          {showPasswordToggle && setShowPassword && (
        <span
          className="cursor-pointer text-gray-400"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>
      )}
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
  )
})

export default FormInput
