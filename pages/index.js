import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import NavBar from '../components/NavBar'
import OverLay from '../components/OverLay'
import {ShoppingBagIcon} from '@heroicons/react/outline'

export default function Main() {   

  return (
  <div className='relative'>
      {/* <Slider/> */}
      <div className = 'flex justify-end  mt-10 bg-gradient-to-r from-indigo-500 to-green-400 p-5 h-[250px] text-5xl text-[#e8e1cf] '>
        <p className = 'w-[700px] leading-relaxed font-semibold font-serif'>What is a Key Performance Indicator (KPI)?</p>
      </div>

      <div className = 'container mt-10 p-0'>
        <div className="card mb-3 w-full bg-transparent border-none" style={{'border':'none !important'}}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <ShoppingBagIcon className = 'h-10 w-10 text-sky-600 ml-3'/>
                <h5 className=" text-2xl text-gray-500">What is a Key Performance Indicator (KPI)?</h5>
                <p className="card-text text-lg">
                  A Key Performance Indicator (KPI) is a measurable value that indicates the success or effectiveness of an organization, 
                  team, project, or individual in achieving specific objectives or goals. KPIs are used to evaluate performance and 
                  track progress over time.
                  KPIs are typically derived from strategic objectives and are selected based on their relevance to the overall goals 
                  of the entity being measured. They can vary across different industries and organizations, depending on their specific 
                  objectives and priorities.
                </p>
                {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
            <div className="col-md-4">
              <img src="/kpis.jpg" className="img-fluid rounded-start h-[300px] w-[300px] mix-blend-multiply" alt="..."/>
            </div>
          </div>
        </div>
        
        <hr className = 'text-blue-600 max-w-full h-2 mt-12 mb-12'/>

        <div className="card mb-3 w-full bg-transparent border-none" style={{'border':'none !important'}}>
          <div className="row g-0 h-[600px]">
            <div className="col-md-6 h-full bg-[#91bd3f] text-gray-200">
              <div className="card-body ">
                <h5 className=" text-2xl  text-center text-2xl">Good KPIS:</h5>
                  <b className = 'text-xl'>Here are a few key characteristics of KPIs:</b>
                <ul>
                  <li className = 'list-disc text-xl leading-7 pb-2'>
                    Quantifiable: KPIs should be measurable in a specific and objective way. 
                    They are usually expressed as numerical values or percentages.
                  </li>
                  <li className = 'list-disc text-xl leading-7 pb-2'>
                    Alignment: KPIs should be aligned with the strategic objectives of the 
                    organization or project. They should directly contribute to the desired outcomes and reflect the critical areas of performance.
                  </li>
                  <li className = 'list-disc text-xl leading-7 pb-2'>
                    Actionable: KPIs should provide meaningful information that enables decision-making and drives performance improvement. They 
                    should be actionable, allowing stakeholders to take specific steps to address any issues or capitalize on opportunities.
                  </li>
                  <li className = 'list-disc text-xl leading-7 pb-2'>
                    Time-bound: KPIs are often associated with a specific timeframe or reporting period. They are frequently monitored and 
                    evaluated at regular intervals, such as monthly, quarterly, or annually.
                  </li>
                  <li className = 'list-disc text-xl leading-7 pb-2'>
                    Context-specific: KPIs are tailored to the specific context and objectives of the entity being measured. Different departments
                    or functions within an organization may have different KPIs based on their unique goals and responsibilities.
                  </li>
                </ul>               
              </div>
            </div>
            <div className="col-md-6  text-lg text-justify h-full overflow-x-scroll ">
              <p className = 'text-xl pl-10 text-left font-semibold text-gray-500'>Here are some examples of Key Performance Indicators (KPIs) commonly used in industrial sectors:</p>
              <p className = 'p-10'>
                  - Overall Equipment Efficiency (OEE): OEE measures the effectiveness of manufacturing
                   equipment by calculating the percentage of planned production time that is truly productive. 
                   It considers factors like availability, performance, and quality to identify areas for improvement in equipment utilization.
                  - Production Yield: Production yield measures the percentage of defect-free products or units produced 
                  during the manufacturing process. It helps assess the quality and efficiency of production and identifies 
                  opportunities for reducing waste and improving processes.
                  - Downtime: Downtime KPI tracks the amount of time production equipment is not operational due to breakdowns, 
                  maintenance, changeovers, or other reasons. Minimizing downtime is crucial to maximizing productivity and reducing costs.
                  - Energy Consumption: This KPI monitors the energy usage of industrial processes to identify energy-saving 
                  opportunities, optimize energy efficiency, and reduce environmental impact.
                  - Inventory Turnover: Inventory turnover measures the number of times inventory is sold and replaced within
                   a given period. It helps assess the efficiency of inventory management, identify slow-moving or obsolete stock, 
                   and optimize supply chain operations.
                  - Health and Safety Incident Rate: This KPI tracks the number of workplace accidents, injuries, or illnesses per 
                  specific period. It helps evaluate the effectiveness of health and safety measures and indicates areas for improvement
                   in employee safety.
                  - Supplier Performance: Supplier performance KPIs assess the quality, reliability, and delivery performance of suppliers. 
                  It helps ensure a smooth supply chain, minimize disruptions, and maintain high-quality materials or components.
                  - Customer Complaints: This KPI measures the number or percentage of customer complaints related to product quality, 
                  delivery delays, or service issues. Monitoring and reducing customer complaints are essential for maintaining customer 
                  satisfaction and loyalty.
                  - On-time Delivery: On-time delivery measures the percentage of orders or shipments delivered to customers on schedule. 
                  It reflects the efficiency of production, logistics, and supply chain management.
                  Return on Investment (ROI): ROI assesses the financial return generated from investments in capital equipment, new 
                  technologies, or process improvements. It helps evaluate the profitability and effectiveness of investments.
              </p>
            </div>
          </div>
        </div>

        <hr className = 'text-blue-600 max-w-full h-2 mt-12 mb-12'/>

      </div>



    </div>
  )
}


