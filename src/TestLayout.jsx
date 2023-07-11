import React from 'react'
import { Outlet } from 'react-router-dom'
import TestNav from './TestNav'

const TestLayout = () => {
  return (
    <>
    <TestNav/>
    <Outlet/>
    </>
  )
}

export default TestLayout