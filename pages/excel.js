import React, { useState } from 'react'
import AddProject from '../components/AddProject'
import DefineProjectSteps from '../components/DefineProjectSteps'
import NavigationBtns from '../components/NavigationBtns'
import DefineProject from '../components/DefineProject'
import ProjectChat from '../components/ProjectChat'
import ChatInput from '../components/ChatInput'

function Excel() {
    const [Projects, setProjects] = useState(['Payrolls Data Base', 'Monthly Dash Board', 'Data Validation'])

    const [BuildingSteps,setBuildingSteps ] = useState({
        open:false,
        name:null,
        description:null,
        nextStep:false,
        steps:[]
    })

    // fn to store data in new project state
    const building = (step)=>{setBuildingSteps({...BuildingSteps, ...step})}
    
    // fn to submit new project data to data base and update front end view 
    
    const [Chat, setChat] = useState([
        {
            from:'client',
            time:'10:13 pm',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium, id impedit perferendis molestias in.'
        },
        {
            from:'client',
            time:'10:13 pm',
            content:'Lorem ipsum dolor sit amet consectetur .'
        },
        {
            from:'app',
            time:'10:13 pm',
            content:' accusantium, id impedit perferendis molestias in.'
        },
        {
            from:'client',
            time:'10:13 pm',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium, id impedit perferendis molestias in.'
        },
        {
            from:'app',
            time:'10:13 pm',
            content:' perferendis molestias in.'
        },
        {
            from:'app',
            time:'10:13 pm',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium, id impedit perferendis molestias in.'
        },
        {
            from:'client',
            time:'10:13 pm',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium, id impedit perferendis molestias in.'
        },
    ])

    const submitProject = ()=>{
        // make chat scenario and store it in var
        // submit chat scenario to firebase an get response
        // show loading flag
        setProjects([...Projects, BuildingSteps.name])
        setBuildingSteps({open:'open', name:null, description:null, nextStep:false, steps:[]})
        // update chat stat with new scenario
        // display chat in front end
    }

    console.log(BuildingSteps)

  return (
    <div className='flex items-start justify-between bg-[#eef0f5] py-3 pl-3 pr-10 h-[calc(100vh-185px)] '>
        <aside className=' basis-[20%] p-2 h-full overflow-hidden scrollbar-hide'>
            <p className=' font-semibold font-sans text-lg'>My <span className='text-purple-700 underline'>Excel</span> Projects ...</p>
            <ul className='p-0 mt-3'>
                {Projects.map((p, index)=>{
                    return (
                        <li key = {index} className=' flex space-x-3 items-center mb-2 px-2 py-1 rounded-full hover:bg-[#cdcfd3] hover:cursor-pointer'>
                            <i className='fas fa-book text-blue-500'></i>
                            <p className='text-lg'>{p}</p>
                        </li>
                    )
                })}
            </ul>
        </aside>

        <main className=' basis-[80%] relative flex items-start justify-center shadow-md border-[1px]  bg-[#dadcdf] 
            rounded-3xl h-full p-3'>
            {/* {BuildingSteps.open === false && <AddProject building = {building}/>}

            {BuildingSteps.open === true && 
                <div className=' relative flex flex-col space-y-4 items-center border-[1px] border-gray-400 rounded-lg h-[90%] p-4 w-[60%] shadow-md '>
                    {!BuildingSteps.nextStep && <DefineProject building = {building}/>}
                    {BuildingSteps.nextStep && <DefineProjectSteps building = {building}/>}
                    <NavigationBtns building = {building} steps = {BuildingSteps} submitProject = {submitProject}/>
                </div>
            } */}

            {/* {BuildingSteps.open === 'open' &&
                <> */}
                    <ProjectChat Chat={Chat}/>
                    <ChatInput/>
                {/* </>
            } */}
        </main>
    </div>
  )
}

export default Excel