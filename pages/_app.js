import Head from '../utils/head'
import Header from '../components/Header'
// import 'datatables.net'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  
  return (
      <div className=' relative '>
        <Head title="Al Watania KPIs"/>
        <Header/>
        <Component {...pageProps}   />    
      </div>
  )
  
}


export default MyApp
