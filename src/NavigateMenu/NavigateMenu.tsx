import {
  LoginOutlined,
  ProjectOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

export const NavigateMenu = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: (
            <Link to={'/login'}>
              <LoginOutlined />
              Login
            </Link>
          ),
        },
        {
          title: (
            <Link to={'/register'}>
              <UserAddOutlined />
              Register
            </Link>
          ),
        },
        {
          title: (
            <Link to={'/projects'}>
              <ProjectOutlined />
              Projects
            </Link>
          ),
        },
      ]}
    />
  )
}
