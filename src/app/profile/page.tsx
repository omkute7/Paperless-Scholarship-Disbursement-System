import Dashboard from '@/components/Dashboard'
import DashboardMain from '@/components/DashboardMain'
import NavBar from '@/components/NavBar'
import React from 'react'

function Profile() {
  return (
    <div className=' text-black'>
      <div className=' flex mt-5 h-[80vh]'>

      <Dashboard/>
      <DashboardMain/>
      </div>
    </div>
  )
}

export default Profile