import React from 'react'

const Quicklinks = () => {
  return (
    <div>
        <div className='flex justify-around bg-blue-50 w-full py-8 '>
          <div>
            <img src="https://b6efee71.flyingcdn.com/wp-content/uploads/2022/07/Logo-Regular.png" alt="Logo" className="w-22 h-12 mr-2 text-lg" />
            <div className='flex flex-col py-5 text-sm'>
              <p className='flex flex-wrap'>
              Simple inventory and <br/>accounting software for your <br/> small, medium, or large <br/> business
              </p>
            </div>
          </div>
          <div>
            <h1 className=''>Features</h1>
            <div className='flex flex-col py-5 text-sm'>
              <a href='#' className="pb-4 font-serif">Invoicing</a>
              <a href='#' className="pb-4 font-serif">Inventory Management</a>
              <a href='#' className="pb-4 font-serif">Accounting</a>
              <a href='#' className="pb-4 font-serif">Reporting</a>
              <a href='#' className="pb-4 font-serif">Mobile Apps</a>
              <a href='#' className="pb-4 font-serif">Pointof Sale Software</a>
            </div>
          </div>
          <div>
            <h1>Company</h1>
            <div className='flex flex-col py-5 text-sm'>
              <a href='#' className="pb-4 font-serif">About us</a>
              <a href='#' className="pb-4 font-serif">Privacy Policy</a>
              <a href='#' className="pb-4 font-serif">Terms of Service</a>
              <a href='#' className="pb-4 font-serif">Subscription Terms</a>
              <a href='#' className="pb-4 font-serif">Roadmap</a>
            </div>
          </div>
          <div>
            <h1>Useful links</h1>
            <div className='flex flex-col py-5 text-sm'>
              <a href='#' className="pb-4 font-serif">Blog</a>
              <a href='#' className="pb-4 font-serif">Book a Demo</a>
              <a href='#' className="pb-4 font-serif">Tutorials</a>
              <a href='#' className="pb-4 font-serif">Help Center</a>
              <a href='#' className="pb-4 font-serif">Compare</a>
              <a href='#' className="pb-4 font-serif">Templates</a>
            </div>
          </div>
          <div>
            <h1>Free Resources</h1>
            <div className='flex flex-col py-5 text-sm'>
              <a href='#' className="pb-4 font-serif">Invoice Generator</a>
              <a href='#' className="pb-4 font-serif">Receipt Maker</a>
              <a href='#' className="pb-4 font-serif">Accounting Templates</a>
              <a href='#' className="pb-4 font-serif">Invoice Templates</a>
              <a href='#' className="pb-4 font-serif">Inventory Templates</a>
              <a href='#' className="pb-4 font-serif">Expense Reports</a>
            </div>
          </div>
          <div>
            Get the app
            <div className='flex flex-col py-5 text-sm'>
            <img className='mb-5' src='https://b6efee71.flyingcdn.com/wp-content/uploads/2023/04/Mobile-app-store-badge-1.png' alt='Google play' width={200} height={100} />
            <img src='https://b6efee71.flyingcdn.com/wp-content/uploads/2023/04/Mobile-app-store-badge.png' width={200} height={100}  alt='App store' />
              
            </div>
          </div>
       </div>
    </div>
  )
}

export default Quicklinks