import React from 'react';

function FormField({label, type, name, value, onChange}){
  return (
    <div>
      <label>
        {label}
        <input 
          type={type}
          name={name}
          value={value}
          onChange={onChange} // Mudança seria no valor que ele aparece para nós //
         />
      </label>
    </div>
  )
}

export default FormField;