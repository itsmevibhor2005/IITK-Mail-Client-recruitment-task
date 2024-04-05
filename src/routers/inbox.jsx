import React from 'react'
import Mail from '../components/mail'
import ReactDOM from 'react'

import { useState, useEffect } from 'react'
const Inbox = () => {

  const [inboxes, setinboxes] = useState([])

  const fetchData = async () => {
    let a = await fetch("../public/inboxes.json")
    let data = await a.json()
    setinboxes(data)
    // console.log(data)
  }

  useEffect(() => {
    fetchData()

    // console.log(inboxes)
  }, [])

  function Mail (body, heading, from, sender, date, time) {


    document.querySelector('.heading').innerText = `${heading}`
    document.querySelector('.mail').style.display = 'block'
    document.querySelector('.sender').innerText = `${from}`
    document.querySelector('.date').innerText = `${date} ${time}`
    document.querySelector('.body').innerText = `${body}`
    

  }

  const displayMail = (e) => {
    let id = e.currentTarget.id;

    let inbox = inboxes[id - 1]
    Mail(inbox.body, inbox.heading, inbox.from, inbox.sender, inbox.date, inbox.time)

  }


  return (
    <div className='flex flex-row'>

      <div className='h-[88vh] min-w-[28vw] bg-slate-400 my-1 mx-1 rounded-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300 scrollbar-thumb scroll-smooth'>
        <h2 className='text-center font-bold underline my-2'>INBOX</h2>
        {inboxes.map((item) => {
          return <div key={item.id}>
            <div id={item.id} onClick={displayMail} className='h-[80px] bg-slate-600 text-gray-300 transition-all border px-3 py-2 cursor-pointer hover:bg-slate-500 hover:text-gray-100' >
              <div className='flex justify-between'>

                <h3 name={item.id} className='text-lg font-medium'>{item.from}</h3>
                <div>

                  <div className='text-sm'>{item.date}</div>
                  <div className="text-xs">{item.time}</div>
                </div>
              </div>
              <div className='min-w-[25vw] '>{item.heading}</div>

            </div>
          </div>

        })}
      </div>

      {

        
        <div className="hidden mail min-w-[53.5vw] bg-slate-400 min-h-[88vh] rounded m-1">
        <h1 className='heading font-bold text-2xl m-3 '></h1>
        <div className='flex w-[500px] gap-10'>
        
        <img src="../icons/user.png" alt="" className='w-[43px] h-[43px] m-[20px]' />
        <div>
        <div className='flex gap-7'>
        <div className='w-[40px]'>
        From:
              </div>
              <div className='sender'>
                
              </div>
            </div>
            <div className='flex gap-7'>
              <div className='w-[40px]'>
                To:
              </div>
              <div>
                svibhor23@iitk.ac.in
              </div>
            </div>
            <div className='flex gap-7'>
              <div className='w-[40px]'>
                Date:
              </div>
              <div className='date'>
                
              </div>
            </div>
          </div>
          </div>
          <div className='body m-3 w-[52vw] bg-slate-300 rounded-md px-2 h-[60vh]'>
          
        </div>
      </div>
    
    }  
    </div>
  )
}

export default Inbox