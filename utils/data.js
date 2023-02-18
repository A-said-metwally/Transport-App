export const kpisAspects = [
    {
      kpi:'Safety',
      bg:'bg-red-500',
      color:`text-blue-500`,
      icon:'fas fa-user-shield',
      aspects:[
        {
            aspectName:'Lti',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
            type:'Limit',
            value:1.2,
            signal:''
          },
          {
            aspectName:'Lost Days',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
            type:'Limit',
            value:30,
            signal:''
          },
          {
            aspectName:'Safety NCR',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
            type:'Target',
            value:'95%',
            signal:''
          },
            ]
    },
    {
        kpi:'Quality',
        bg:'bg-green-700',
        color:'text-gray-100',
        icon:'fas fa-search',
        aspects:[
            {
              aspectName:'Quality Root',
              description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
              type:'Target',
              value:'95%',
              signal:''
            },
            {
              aspectName:'Conformity Index',
              description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
              type:'Target',
              value:'92%',
              signal:''
            },
            {
              aspectName:'External Audit',
              description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
              type:'Target',
              value:'100%',
              signal:''
            },
            {
                aspectName:'NCR',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
                type:'Target',
                value:'95%',
                signal:''
              },
              {
                aspectName:'Area Swap',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
                type:'Target',
                value:'91%',
                signal:''
              },
        
              ]
      },
      {
        kpi:'Production',
        bg:'bg-blue-500',
        color:'text-gray-100',
        icon:'fas fa-industry',
        aspects:[
            {
              aspectName:'SPP Efficiency',
              description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
              type:'Target',
              value:'85%',
              signal:''
            },
            {
              aspectName:'FPP Efficiency',
              description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
              type:'Target',
              value:'82%',
              signal:''
            },
            {
              aspectName:'Un Availability',
              description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
              type:'Limit',
              value:'2.5%',
              signal:''
            },
            {
              aspectName:'Productivity',
              description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor neque necessitatibus maxime magni voluptatem',
              type:'Target',
              value:'15 kg/man hr',
              signal:''
            },
    
              ]
      },
  
  ]
