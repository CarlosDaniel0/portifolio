import React from 'react'
import Header from '../Header'
import Network from '../Network'
import Footer from '../Footer'
import Title from '../PageTitle'

const Layout = ({ children }) => {
  return (
    <div>
      <Title title='Portifólio - Carlos Daniel' />
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
