import Head from '../utils/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import FirstHeader from '../components/FirstHeader'
import SecondHeader from '../components/SecondHeader'



function MyApp({ Component, pageProps }) {

  return (
      <div className='  '>
        <Head title="Help Service"/>
        <FirstHeader/>
        <div className=' sticky top-0 z-30'>
          <SecondHeader/>
        </div>

        <Component {...pageProps}   />
      </div>
  )
  
}


export default MyApp
