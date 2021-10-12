import { connect } from 'react-redux'

import Index from './Index'
import Login from './Login'


interface PageRoute {
  location: {
    type: string
  }
}

const PageRoutes = ({location}: PageRoute) => {
  const routes = () => {
    switch (location.type) {
      case 'HOME':
        return <Index/>
      case 'LOGIN':
        return <Login/>
      default:
        return <div className="dark:text-white text-gray-900"> PAGE NOT FOUND </div>
    }
  }

  return <div>{routes()}</div>
}


export default connect((state: PageRoute) => ({
  location: state.location
}))(PageRoutes)