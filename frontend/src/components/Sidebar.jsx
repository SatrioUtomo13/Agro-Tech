import React,{useState} from 'react'
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiTable } from 'react-icons/hi';

function SidebarContainer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const ToggleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" onClick={ToggleMenu} aria-controls="default-sidebar" type="button" class="inline-flex absolute z-10 items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
        </button>
      <div className={`border-r-2 border-slate-200 border-dashed w-fit transition duration-150 ${isSidebarOpen ? '-translate-x-0' : '-translate-x-[100%]'} md:-translate-x-0`}>
        <Sidebar aria-label="Sidebar with logo branding example" className={`h-screen`}>
          <Sidebar.Logo href="#" img="/src/assets/react.svg" imgAlt="Flowbite logo" className='py-5 bg-gray-200 rounded-lg mt-10'>
            <span className='font-publicSans font-semibold text-md'>Agro Tech</span>
          </Sidebar.Logo>
          <Sidebar.Items >
            <Sidebar.ItemGroup className='font-publicSans'>
              <Sidebar.Item href="#" icon={HiChartPie} className="text-[#637381] font-medium">
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox} className="text-[#637381] font-medium">
                Device
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable} className="text-[#637381] font-medium">
                Report
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  )
}

export default SidebarContainer
