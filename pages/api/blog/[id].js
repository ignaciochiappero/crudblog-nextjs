import conectarDB from "@/lib/dbConnect";
import Blog from "@/models/Blog";


export default async function handler(req, res) {
 
  
  await conectarDB();
  

    // GET api/blog/:id (obtener un id y listarlo - agregar un documento)
    // DELETE api/blog/:id (elimina un documento con id )
    // PUT api/blog/:id (modifica un documento con id  )
    

  const {method, query: {id}, } = req;

  switch(method) {

    case 'PUT':
      try{

       const blog = await Blog.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
       );

       if(!blog) {
            return res.status(404).json({success: false });
       }

       return res.json({success: true, data: blog});

      }catch (error) {
        return res.status(404).json({success: false, error });
        }




    case 'DELETE':
      try{

       const blog = await Blog.findByIdAndDelete(id)

       if(!blog) {
            return res.status(404).json({success: false });
       }

       return res.json({success: true, data: blog});

      }catch (error) {
        return res.status(404).json({success: false });
        }


    case 'GET':
      try{

       const blog = await Blog.findById(id).lean(); // Poner .lean() aliviana muchísimo la carga, es una re buena práctica

       if(!blog) {
            return res.status(404).json({success: false });
       }

       return res.json({success: true, data: blog});

      }catch (error) {
        return res.status(404).json({success: false });
        }
     
    
    default :
      return res
        .status(500)
        .json({success: false, error: 'Falla de servidor'});
  }

}