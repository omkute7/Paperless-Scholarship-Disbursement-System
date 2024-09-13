import Dashboard from '@/components/Dashboard'
import DashboardMain from '@/components/DashboardMain'
import React from 'react'

function profilePage() {
    return (
        <div className=' text-black'>
          <div className=' flex mt-5 h-[80vh]'>
    
          <Dashboard/>
          <DashboardMain/>
          </div>
        </div>
      )
}

export default profilePage