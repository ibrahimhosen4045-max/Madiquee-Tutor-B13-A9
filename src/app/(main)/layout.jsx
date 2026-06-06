import Footer from '@/component/Footer'
import Nevber from '@/component/Nevber'

import React from 'react'

const Layoutmain = ({children}) => {
  return (
    <div>
       <Nevber></Nevber>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layoutmain
