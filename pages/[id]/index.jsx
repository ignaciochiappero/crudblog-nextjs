
import conectarDB from "@/lib/dbConnect";
import Blog from "@/models/Blog";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const BlogPage = ({success, error, blog}) => {

    const router = useRouter();
   
    if (!success){
        return (
            
            <div className="container text-center my-5">

            <h1>{error} 🤦‍♂️</h1>
           
            <Link href="/">
              <div className="btn btn-success">Volver</div>
            </Link>


            </div>
        )
    }

    const deleteData = async(id) => {
      try {
        await fetch(`/api/blog/${id}`, {
          method: 'DELETE'
        });
        router.push('/')

      } catch (error) {
        
      }
    }





  return (
    <div className="container">

      <Head>  
        <title>BLOGS | NACHO BLOG</title>
        <meta name="description" content="Web creada por Nacho Chiappero" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      
        <h1 className="text-center bg-dark text-light">Detalle del Blog 👾</h1>
      
        <div className="card-title border p-2 text-center">
            <h5 className="text-uppercase">{blog.title}</h5>

            <p className="fw-light">{blog.plot}</p>

            {/* Botón para volver al inicio */}
            <Link href="/">
            <div className="btn btn-success btn-sm me-2">Volver...</div>            
            </Link>

            {/* Botón para editar el blog */}
            <Link href={`/${blog._id}/edit`}>
                <div className="btn btn-warning btn-sm me-2">Editar</div>
            </Link>


            {/* Botón para eliminar el blog */}
            <button className="btn btn-danger btn-sm" onClick={() => deleteData(blog._id)}>Eliminar</button>




        </div>

    </div>
  )
}

export default BlogPage;


export async function getServerSideProps({params}){
    try {
        await conectarDB();
  
      
        const blog = await Blog.findById(params.id).lean();

        if (!blog){
            return { props: { success: false, error: 'BLOG NO ENCONTRADO!!! 🙀'}  };
 
        }


  
        console.log(blog);

        blog._id = `${blog._id}`;

        return {  props: { success: true, blog}  };

    } catch (error) {

      console.log(error);

      if (error.kind === 'ObjectId'){
        return { props: { success: false, error: 'ID no válido'}  };
 
      }
      else {
        return { props: { success: false, error: 'Error del Servidor'}  };
      }
     
    }
  } 