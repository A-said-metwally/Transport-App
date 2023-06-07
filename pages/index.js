import React, {useEffect, useState} from 'react'
import Slider from '../components/Slider'
import {ShoppingBagIcon, ClipboardListIcon, QuestionMarkCircleIcon} from '@heroicons/react/outline'
import CiTeam from '../components/CiTeam'
import Title from '../components/Title'
import Spiner from '../components/Spiner'
import Image from 'next/image'
import KpisAspects from '../components/KpisAspects'
import Up from '../components/Up'


export default function Main() {   

  const [Scrlheight, setScrlheight] = useState(0)

  useEffect(()=>{
    window.onscroll = ()=>{setScrlheight(window.pageYOffset)}
  })

  return (
  <div className='relative '>
      <Up/>
      <div className='container text-center'>
        <h1 className=' text-purple-600 text-2xl font-sans leading-3 p-14 font-bold'>
          مرحبًا بكم في موقع تسجيل و عرض بيانات مؤشرات آداء قطاع التصنيع بدواجن الوطنية  
        </h1>
      </div>
      <div className = ' relative flex justify-end items-center shadow-md mt-10 bg-gradient-to-r from-indigo-500 to-green-400 p-5 h-[250px] text-5xl text-white '>
        <p className = 'w-[700px] leading-relaxed font-semibold font-serif'>لماذا نحتاج لمؤشرات الآداء ؟</p>
        <div className='absolute left-32 bottom-[-103px] h-[250px] w-[250px] rounded-full shadow-md'>
          <Image layout="fill"  src = '/kpi.jpg' alt='kpi' className='rounded-full' />
        </div>
      </div>
      
      <Spiner/>

      <div className = 'container mt-[80px]  p-0'>
        <div className="card mb-3 w-full bg-transparent border-none" style={{'border':'none !important'}}>
          <div className="row g-0 relative overflow-hidden">
            <div className={`col-md-4 absolute ${Scrlheight >= 380 ? 'left-0' : 'left-[-500px]'} transition-all duration-700 `}>
              <Image height={400} width={300} src="/kpis.jpg" className="img-fluid rounded-start h-[300px] w-[300px] mix-blend-multiply" alt="kpi-img"/>
            </div>
            <div className="col-md-8">
              <div className="card-body ">
                <div className='text-right flex items-center space-x-3 justify-end mb-3'>
                  <h5 className=" text-2xl text-gray-500 ">لماذا نحتاج لمؤشرات الآداء ؟</h5>
                  <QuestionMarkCircleIcon className = 'h-10 w-10 text-sky-600 animate-bounce'/>
                </div>
                <p className="card-text text-lg font-semibold text-gray-500 text-right leading-8">
                تخيل انك تقود سيارتك في الصباح متوجهًا من المنزل إلى العمل, و فوجئت انه لا يوجد امامك لوحات السرعة ولا مستوى الوقود ولا مستوى حرارة مياه تبريد المحرك ولا تستطيع ان تعلم معدل استهلاك وقود السيارة, تخيلت ؟, بضعة معلومات عدم توفرها قد يمنع تحركك بالسيارة على الرغم من انه لا يوجد ما يمنعك من قيادتها, إلا ان عدم متابعتك لمؤشرات السيارة لا يجعلك تستطيع قيادتها و التحرك بها, فما بالك بمصنع او مجموعة من المصانع تعمل منذ عشرات السنين ولا تستطيع متابعة مؤشرات المصانع الرئيسية, لا تستطيع ان تعرف معدلات السلامة ولا الجودة ولا يمكنك متابعة كفاءة خطوط الانتاج و لا تعلم معدلات استهلاك الخامات و ما هي اكبر الحيود الموجودة عندك, بدون كل ما سبق
                 ستفقد مجرد فكرة التحسين, فكيف نستطيع تحسين ما لا نقيسه ولا نعرف في اي وضع وصل
                  لذلك, بدأنا في قطاع المصانع في دواجن الوطنية, بوضع مباديء و اساسيات مؤشرات الاداء  الاساسية لقطاع المصانع,
                  .و التي منها سنستطيع تحديد نقاط الضعف و الحيود و العمل عليها لتكون البداية في خطوات التحسين المستمر
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Spiner/>

        <div className="card mb-12 mt-[80px] w-full bg-transparent border-none" style={{'border':'none !important'}}>
          <div className="row g-0 ">
            <div className={`${Scrlheight >= 1100 ? 'opacity-1' : 'opacity-0'} col-md-12 h-full transition-all duration-1000 bg-[#91bd3f] text-white rounded-lg shadow-lg`}>
              <div className="card-body text-right">
                  <b className = 'text-xl text-right font-sans'>{`تنقسم مؤشرات الاداء داخل قطاع المصانع إلى ثلاث أقسام رئيسية و هي المؤشرات الفردية '–' مؤشرات الانتاجية '–' المؤشرات العامة`}</b>
                <ul className=' text-right list-disc mt-5 main-page-ul mr-5' >
                  <li className = 'list-disc text-xl leading-7 pb-5 text-right'>
                    <span className=' font-semibold text-gray-600'> المؤشرات الفردية</span>, هي المؤشرات الخاصة بكل فرد على حدى و هي تتحدد غالبًا بسلوك الفرد و انتظامه داخل العمل و هنا اخترنا مؤشرين, الاول هو الغياب بدون إذن و الثاني هو مخالفات تعليمات السلامة 
                  </li>
                  <li className = 'list-disc text-xl leading-7 pb-5'>
                    <span className=' font-semibold text-gray-600'>مؤشرات الانتاجية</span>, هي المؤشرات الخاصة بكل قسم و فيها يتم قياس آداء القسم من خلال مؤشر واحد يميز اداء القسم خلال فترة القياس و يتم من خلاله معرفة انتاجية العاملين بهذا القسم
                  </li>
                  <li className = 'list-disc text-xl leading-7 pb-5'>
                    <span className=' font-semibold text-gray-600'>المؤشرات العامة</span>, هي المؤشرات التي تقيس آداء القطاع كفريق عمل واحد له اهداف محددة يتكاتف الجميع لتحقيقها, و تشمل المؤشرات العامة عدة محاور رئيسية كالجودة و الانتاج و التكلفة و الخطة
                  </li>
                </ul>  
                <h4 className='mt-3 text-white text-xl font-sans'>لتفاصيل أكثر, برجاء الاطلاع على العرض التقديمي بالاسفل</h4>             
              </div>
            </div>
          </div>
        </div>

      </div>
      <Spiner/>

      <div className = ' relative flex justify-end shadow-md items-center  mt-[80px] bg-gradient-to-r from-indigo-500 to-green-400 p-5 h-[250px] text-5xl text-white '>
        <p className = 'w-[700px] leading-relaxed font-semibold font-serif'>محاور مؤشرات قياس الاداء</p>
        <div className='absolute left-32 bottom-[-103px] h-[250px] w-[250px] rounded-full shadow-md'>
          <Image layout="fill"  src = '/kpi.jpg' alt='kpi' className='rounded-full' />
        </div>
      </div>
      
      <KpisAspects height = {Scrlheight}/>

      <Spiner/>

      <div className = ' relative flex justify-end shadow-md items-center  mt-[80px] bg-gradient-to-r from-indigo-500 to-green-400 p-5 h-[250px] text-5xl text-white '>
        <p className = 'w-[700px] leading-relaxed font-semibold font-serif'>Al Watania KPIs 2023</p>
        <div className='absolute left-32 bottom-[-103px] h-[250px] w-[250px] rounded-full shadow-md'>
          <Image layout="fill"  src = '/kpi.jpg' alt='kpi' className='rounded-full' />
        </div>
      </div>

      <Slider/>

      <Spiner/>

      <Title title={"فريق التحسين المستمر"} Icon={ClipboardListIcon}/>
      <CiTeam/>

    </div>
  )
}


