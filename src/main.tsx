// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './2-rtk/store.ts'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter >
    <Provider store={store}>
      {/* <StrictMode> */}
        <App />
      {/* </StrictMode> */}
    </Provider>
  </BrowserRouter>
)