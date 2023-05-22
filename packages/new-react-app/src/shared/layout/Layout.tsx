
import React from 'react'
import { Header } from './header'

type Props = React.PropsWithChildren

export const Layout = ({children}:Props) => {
  return (
    <div>
        <Header/>

        <main>
            {children}
        </main>
    </div>
  )
}
