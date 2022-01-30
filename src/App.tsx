import React from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import Home from './pages/home/'
import Detail from './pages/home/parts/detail'
import '../assets/style/tailwind/main.css'
import '../assets/style/main.scss'

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

export const App: React.FC = () => (
  <div>
    <Router>
      <RouterPage path="/" pageComponent={<Home />} />
      <RouterPage path="/detail" pageComponent={<Detail />} />
    </Router>
  </div>
)
