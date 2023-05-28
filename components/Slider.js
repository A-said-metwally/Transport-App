import React from 'react'

function Slider() {
  return (
        <div className=' container h-[550px] w-full mt-[150px] mb-[100px]'>
            <div id="carouselExampleCaptions" className="carousel slide h-full w-full" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner h-full w-full">
                    <div className="carousel-item active h-full w-full">
                        <img src="/k1.jpg" className="d-block h-full w-full object-fill" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item h-full w-full">
                        <img src="/k2.jpg" className="d-block w-full h-full" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item h-full w-full">
                        <img src="/k3.jpg" className="d-block w-full h-full object-fill" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item h-full w-full">
                        <img src="/k4.jpg" className="d-block w-full h-full object-fill" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
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