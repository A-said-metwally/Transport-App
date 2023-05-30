import Image from 'next/image'
import React from 'react'

function Slider() {

    let arr = [1,2,3,4]
  return (
        <div className=' container h-[550px] w-full mt-[150px] mb-[100px]'>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade h-full w-full" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner h-full w-full">
                    {arr.map((i, index)=>{
                        return (
                            <div key={index} className={`carousel-item ${i === 1 ? 'active': null}  h-full w-full`}>
                                <Image layout='fill' src={`/k${i}.JPG`} className="d-block h-full w-full object-fill" alt={`${i}`}/>
                                <div className="carousel-caption d-none d-md-block">
                                    {/* <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p> */}
                                </div>
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
