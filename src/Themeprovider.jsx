import React, { Children, useState } from 'react'
import Themecontext from './Themecontext'

const Themeprovider = ((Children)) => {
    const[theme,settheme]=useState('light')
    let toggletheme=()=>{
        settheme(theme=='light'?'dark':'light')
    }
  return (
    <div>
        <Themecontext.Provider value={{theme,toggletheme}}>
            {Children}
        </Themecontext.Provider>
    </div>
  )
}

export default Themeprovider