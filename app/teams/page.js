"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "@fortawesome/fontawesome-free/css/all.min.css";

const page = () => {
  return (
    <div className='relative bg-gradient-radial from-[#0052A1] to-[#002863] h-full'>
        <Navbar/>
        <img
        src="/vector.png" 
        alt="Background"
        className="absolute top-1/2 left-1/2 w-full h-[80%] object-contain z-0 transform -translate-x-1/2 -translate-y-1/2"
      />
      
      <div className="tags m-6">
        <h3 className='text-white text-4xl text-bold m-2'>Meet the MSC Family</h3>
        <div className="container grid grid-cols-4 text-center">

        <div className="cards bg-orange-50 text-black w-64 h-auto p-2 rounded-xl border-4 border-black text-center m-4">
            <div className="flex items-center justify-center"><img src="/profile.png" alt="" width={150} height={250} className='border-black border-2 rounded-full mx-auto' /></div>
            <h4 className='text-bold text-3xl text-right mt-6'>Harsh Raj</h4>
            <p className='text-slate-600 text-right'>Technical Lead</p>
            <div className="box gap-4 flex justify-end m-4">
            <i className="text-3xl fa-brands fa-linkedin"></i>
            <i className="text-3xl fa-brands fa-github"></i>
            </div> 
        </div>
        <div className="cards bg-orange-50 text-black w-64 h-auto p-2 rounded-xl border-4 border-black text-center m-4">
            <div className="flex items-center justify-center"><img src="/profile.png" alt="" width={150} height={250} className='border-black border-2 rounded-full mx-auto' /></div>
            <h4 className='text-bold text-3xl text-right mt-6'>Harsh Raj</h4>
            <p className='text-slate-600 text-right'>Technical Lead</p>
            <div className="box gap-4 flex justify-end m-4">
            <i className="text-3xl fa-brands fa-linkedin"></i>
            <i className="text-3xl fa-brands fa-github"></i>
            </div> 
        </div>
        <div className="cards bg-orange-50 text-black w-64 h-auto p-2 rounded-xl border-4 border-black text-center m-4">
            <div className="flex items-center justify-center"><img src="/profile.png" alt="" width={150} height={250} className='border-black border-2 rounded-full mx-auto' /></div>
            <h4 className='text-bold text-3xl text-right mt-6'>Harsh Raj</h4>
            <p className='text-slate-600 text-right'>Technical Lead</p>
            <div className="box gap-4 flex justify-end m-4">
            <i className="text-3xl fa-brands fa-linkedin"></i>
            <i className="text-3xl fa-brands fa-github"></i>
            </div> 
        </div>
        <div className="cards bg-orange-50 text-black w-64 h-auto p-2 rounded-xl border-4 border-black text-center m-4">
            <div className="flex items-center justify-center"><img src="/profile.png" alt="" width={150} height={250} className='border-black border-2 rounded-full mx-auto' /></div>
            <h4 className='text-bold text-3xl text-right mt-6'>Harsh Raj</h4>
            <p className='text-slate-600 text-right'>Technical Lead</p>
            <div className="box gap-4 flex justify-end m-4">
            <i className="text-3xl fa-brands fa-linkedin"></i>
            <i className="text-3xl fa-brands fa-github"></i>
            </div> 
        </div>
        <div className="cards bg-orange-50 text-black w-64 h-auto p-2 rounded-xl border-4 border-black text-center m-4">
            <div className="flex items-center justify-center"><img src="/profile.png" alt="" width={150} height={250} className='border-black border-2 rounded-full mx-auto' /></div>
            <h4 className='text-bold text-3xl text-right mt-6'>Harsh Raj</h4>
            <p className='text-slate-600 text-right'>Technical Lead</p>
            <div className="box gap-4 flex justify-end m-4">
            <i className="text-3xl fa-brands fa-linkedin"></i>
            <i className="text-3xl fa-brands fa-github"></i>
            </div> 
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
