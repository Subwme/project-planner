import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ConfigProvider } from 'antd'
import { customTheme } from './theme.ts'
import { ProjectPlannerView } from './view/index.tsx'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')
if (!container) throw new Error('#root element not found')
const root: ReactDOM.Root = ReactDOM.createRoot(container)

root.render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={customTheme}>
        <Provider store={store}>
          <ProjectPlannerView />
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
)
