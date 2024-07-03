import conectarDB from "@/lib/dbConnect";
import Blog from "@/models/Blog";


export default async function handler(req, res) {
 
  
  await conectarDB();
  
  const {method} = req;

  switch(method) {
    case 'POST' :
      try{

        const blog = new Blog(req.body);
        await blog.save();

        return res.status(200).json({success: true, blog});

      }catch (error){
          return res.status(400).json({success: false, error});
        }
     
    
    default :
      return res.status(500).json({success: false, error: 'Falla de servidor'});
  }

}