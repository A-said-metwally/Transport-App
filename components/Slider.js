import Image from 'next/image'
import React from 'react'

function Slider() {

    let arr = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27']
  return (
        <div className=' container h-[550px] w-full mt-[150px] mb-[100px]'>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade h-full w-full" data-bs-ride="false">
                <div className="carousel-indicators">
                {arr.map((i, index)=>{
                        return (
                            <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i - 1} className={i === 1 ? "active" : null} aria-current="true" aria-label={'Slide '+ i}></button>
                            )
                    })}

                </div>
                <div className="carousel-inner h-full w-full">
                    {arr.map((i, index)=>{
                        return (
                            <div key={index} className={`carousel-item ${i === 1 ? 'active': null}  h-full w-full`}>
                                <Image layout='fill' src={`/Watania Manufacturing KPIs Proposal_05062023-page-0${i}.jpg`} className="d-block h-full w-full object-fill" alt={`${i}`}/>
                                {/* <Image layout='fill' src={`/k${i}.JPG`} className="d-block h-full w-full object-fill" alt={`${i}`}/> */}
                            </div> //Watania Manufacturing KPIs Proposal_05062023-page-001
                            )
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Slider
