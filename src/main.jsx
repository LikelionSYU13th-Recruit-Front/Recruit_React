import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ActivityPage from './RecruitPage2/ActivityPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActivityPage />
  </StrictMode>,
)
