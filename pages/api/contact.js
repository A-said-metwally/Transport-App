import { mailOptions, transporter } from "../../config/nodemailer"


const content = ` 
    <div style='background-color:yellow; color:green; width:50%; height:50%; border:1px solid gray;'>
        <h1>hello basma</h1>
        <p>message body text</p> 
        <span>1232</span>
    </div>
`    
const email =  process.env.emailUser;

const handler = async (req, res) => {
    if (req.method === 'POST'){
        const data = req.body

        try{
            await transporter.sendMail({
                from :email,
                to: email,            
                // to: data.receptMail,            
                subject: data.subject,
                text: data.text,
                html:content
            })
            return res.status(200).json({success :true})
        } catch (error){
            console.log(error)
            return res.status(400).json({message: error.message})
        }
    }
}

export default handler