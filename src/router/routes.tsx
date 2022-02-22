import { Routes, Route } from 'react-router-dom'
import Index from '../views'
import DemoIndex from '../views/demo'

const BasicRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />}></Route>
    <Route path="/demo" element={<DemoIndex />}></Route>
  </Routes>
)

export default BasicRoutes
