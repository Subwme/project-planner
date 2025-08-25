import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ConfigProvider } from 'antd'
import { customTheme } from './theme.ts'
import { App } from './App.tsx'

const container = document.getElementById('root')
if (!container) throw new Error('#root element not found')
const root: ReactDOM.Root = ReactDOM.createRoot(container)

root.render(
  <StrictMode>
    <ConfigProvider theme={customTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </StrictMode>
)
