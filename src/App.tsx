import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </>
  )
}
