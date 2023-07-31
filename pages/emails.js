import React from 'react'
import { useState } from 'react'


function Emails() {

  const [SenderData, setSenderData] = useState({
    name:'Ahmed Said',
    receptMail:'ametwally@Al-Watania.com',
    address:'egypt',
    subject:'OTP 11225',
    text:'i have complaint'
  })

  const [Loading, setLoading] = useState(false)

  const submit = async ()=>{
    setLoading(true)
      await fetch('/api/contact',{
        method : 'POST',
        body : JSON.stringify(SenderData),
        headers : {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        }
      }).then((res)=>{if(res.status === 200){
        setLoading(false)
        console.log('sending done')
      }else{
        console.log('bad request')
      }})
  }


  return (
    <div className='flex justify-center'>
        <button
          className='bg-blue-500 p-3 text-white text-lg rounded-lg'
          onClick={()=>submit()}
          disabled={false}
          isLoading={true}
        >
          {Loading && <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div> }
          {!Loading && 'Submit'}
        </button>  


 
    </div>
  )
}

export default Emails