import React from 'react'

const BusinessDetails = () => {
  return (
    <div className='px-7 bg-blue-50 flex justify-between'>
        <div className='mt-5'>
            <div className='text-5xl font-semibold my-8'>
                Free receipt maker for <br/> your small business 
            </div>
            <div className='text-lg'>
                Create and send professional receipts to your customers with our free receipt <br/>
                    generator. Save time managing your small business. Enter your customer<br/> 
                    information, download or print the receipt now. No email required<br/>
            </div>
            <button className="bg-blue-700 p-3 px-4 my-7 text-white rounded-lg"><span className="p-2">Generate a receipt</span></button>
        </div>
        <div className='mt-8'>
            <img src='Receipt-1.webp' className='object-fill' />
        </div>
        
            
        
    </div>
  )
}

export default BusinessDetails