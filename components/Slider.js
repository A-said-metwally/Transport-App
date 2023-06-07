import Image from 'next/image'
import React from 'react'

function Slider() {

    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
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
                                <Image layout='fill' src={`/k${i}.JPG` || `/k${i}.jpg`} className="d-block h-full w-full object-fill" alt={`${i}`}/>
                            </div>
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
