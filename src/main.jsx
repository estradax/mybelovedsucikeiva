import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Layout from './Layout.jsx'

import Landing from '@/views/Landing.jsx'
import Intro from '@/views/Intro.jsx'
import Grateful from '@/views/Grateful.jsx'
import Sorry from '@/views/Sorry.jsx'
import Thanks from '@/views/Thanks.jsx'
import Related from '@/views/Related.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />}></Route>
          <Route path="intro" element={<Intro />}></Route>
          <Route path="grateful" element={<Grateful />}></Route>
          <Route path="sorry" element={<Sorry />}></Route>
          <Route path="thanks" element={<Thanks />}></Route>
          <Route path="related" element={<Related />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
