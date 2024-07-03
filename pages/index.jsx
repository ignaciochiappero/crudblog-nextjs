import Head from "next/head";
import conectarDB from "@/lib/dbConnect";
import Blog from "@/models/Blog";
import Link from "next/link";

export default function Home({blogs}) {
    console.log(blogs)

  return (
    <div>
      <Head>  
        <title>NACHO BLOG | NEXT.JS</title>
        <meta name="description" content="Web creada por Nacho Chiappero" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      
      <main className="container">
        <h1 className="text-center">MI HISTORIA</h1>

{/* Botón para ir a la página de agregar pelis */}
        <Link href="/new">
        <div className="btn btn-primary w-100 my-2">
          Agregá tu experiencia de vida!
        </div>
        </Link>

        {
          blogs.map(({_id, title, plot}) => (

            <div className="card mb-2" key={_id}>

              <div className="card-body">
                
                {/* Título del blog */}
                <div className="h5 text-uppercase"> {title}</div>

                {/* Descripción del blog */}
                <p className="fw-light">{plot}</p>


                {/* Botón para ir a la info de cada blog */}
                <Link href={`/${_id}`}>
                   <div className="btn btn-success btn-sm">Más info...</div>
                </Link>


              </div>
            </div>
          ))
        }
      </main>
        
      
    </div>
  )
}


export async function getServerSideProps(){
  try {
      await conectarDB()

      const res = await Blog.find({})

      const blogs = res.map(doc => {
        const blog = doc.toObject()
        blog._id = `${blog._id}`
        return blog 
      })

     // console.log(res)

      return { props: { blogs }  }
  } catch (error) {
    console.log(error)
  }
} 
