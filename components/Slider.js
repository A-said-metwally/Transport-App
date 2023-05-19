import React from 'react'

function Slider() {
  return (
    <div className='  mt-3'>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner h-96 w-screen">
                <div className="carousel-item active bg-orange-500 h-full w-full ">
                    <img src="/kpis.jpg" className="d-block w-100" alt="..."/>

                    <div className="carousel-caption d-none d-md-block mb-11">
                        <p className=' kpi-title font-bold font-serif mb-3'>Safety <span classNameName='text-yellow-300'>Kpi</span></p>
                        <p className=' text-2xl text-justify font-serif '>
                            Safety KPIs are performance indicators that serve as metrics for specific company efforts in health
                             and safety. Tracking health and safety KPIs allows a business to determine how safe the work environment
                              is for employees and whether the company is within regulatory compliance from organizations such as OSHA.
                               Tracking these key performance indicators helps companies determine which safety standards theyre already
                                meeting and which standards they might need to allocate more resources toward achieving.
                        </p>
                    </div>
                </div>

                {/* <div className="carousel-item bg-green-700 h-full "> */}
                    {/* <img src="..." className="d-block w-100" alt="..."/> */}

                    {/* <div className="carousel-caption d-none d-md-block mb-11 ">
                        <h5 className=' kpi-title font-bold font-serif mb-3'>Quality <span classNameName='text-yellow-300'>Kpi</span></h5>
                        <p className=' text-2xl text-justify font-serif '>
                            Quality control means that every product that is not right the first time gets withdrawn from the process. Whatever
                            gets blocked by quality control, cannot go to the customer and is therefore preventing customer complaints.  
                            If ‘right first time’ would be a quality KPI or even an objective, these quality departments  would be penalised 
                            for doing their job which cannot be the aim. On top of that, the production department is producing nonconforming 
                            products, not the quality departmen
                        </p>
                    </div>  */}
                {/* </div>  */}

                {/* <div className="carousel-item bg-blue-500 h-full "> */}
                    {/* <img src="..." className="d-block w-100" alt="..."/>  */}

                    {/* <div className="carousel-caption d-none d-md-block mb-11 ">
                        <h5 className=' kpi-title font-bold font-serif mb-3'>Production <span classNameName='text-yellow-300'>Kpi</span></h5>
                        <p className=' text-2xl text-justify font-serif '>
                            Quality control means that every product that is not right the first time gets withdrawn from the process. Whatever
                            gets blocked by quality control, cannot go to the customer and is therefore preventing customer complaints.  
                            If ‘right first time’ would be a quality KPI or even an objective, these quality departments  would be penalised 
                            for doing their job which cannot be the aim. On top of that, the production department is producing nonconforming 
                            products, not the quality departmen
                        </p>
                    </div> */}
                {/* </div>  */}
                {/* <div className="carousel-item bg-purple-500 h-full "> */}
                    {/* <img src="..." className="d-block w-100" alt="..."/>  */}

                    {/* <div className="carousel-caption d-none d-md-block mb-11 ">
                        <h5 className=' kpi-title font-bold font-serif mb-3'>Delivery <span classNameName='text-yellow-300'>Kpi</span></h5>
                        <p className=' text-2xl text-justify font-serif '>
                            Quality control means that every product that is not right the first time gets withdrawn from the process. Whatever
                            gets blocked by quality control, cannot go to the customer and is therefore preventing customer complaints.  
                            If ‘right first time’ would be a quality KPI or even an objective, these quality departments  would be penalised 
                            for doing their job which cannot be the aim. On top of that, the production department is producing nonconforming 
                            products, not the quality departmen
                        </p>
                    </div> */}
                {/* </div>  */}
                {/* <div className="carousel-item bg-red-500 h-full "> */}
                    {/* <img src="..." className="d-block w-100" alt="..."/>  */}

                    {/* <div className="carousel-caption d-none d-md-block mb-11 ">
                        <h5 className=' kpi-title font-bold font-serif mb-3'>Cost <span classNameName='text-yellow-300'>Kpi</span></h5>
                        <p className=' text-2xl text-justify font-serif '>
                            Quality control means that every product that is not right the first time gets withdrawn from the process. Whatever
                            gets blocked by quality control, cannot go to the customer and is therefore preventing customer complaints.  
                            If ‘right first time’ would be a quality KPI or even an objective, these quality departments  would be penalised 
                            for doing their job which cannot be the aim. On top of that, the production department is producing nonconforming 
                            products, not the quality departmen
                        </p>
                    </div> */}
                {/* </div>  */}
                {/* <div className="carousel-item bg-gray-600 h-full "> */}
                    {/* <img src="..." className="d-block w-100" alt="..."/>  */}

                    {/* <div className="carousel-caption d-none d-md-block mb-11 ">
                        <h5 className=' kpi-title font-bold font-serif mb-3'>People <span classNameName='text-yellow-300'>Kpi</span></h5>
                        <p className=' text-2xl text-justify font-serif '>
                            Quality control means that every product that is not right the first time gets withdrawn from the process. Whatever
                            gets blocked by quality control, cannot go to the customer and is therefore preventing customer complaints.  
                            If ‘right first time’ would be a quality KPI or even an objective, these quality departments  would be penalised 
                            for doing their job which cannot be the aim. On top of that, the production department is producing nonconforming 
                            products, not the quality departmen
                        </p>
                    </div> */}
                {/* </div>  */}

            </div>

            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
</div>
  )
}

export default Slider