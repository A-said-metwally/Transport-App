import Head from '../utils/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return (
      <div className='  '>
        <Head title="Converter"/>
        <Component {...pageProps}   />
      </div>
  )
  
}


export default MyApp
