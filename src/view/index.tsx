import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { Projects } from '../components/Projects'
import { NavigateMenu } from '../NavigateMenu'

export const ProjectPlannerView = () => {
  return (
    <>
      <NavigateMenu />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  )
}
