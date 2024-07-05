import Head from "next/head";
import conectarDB from "@/lib/dbConnect";
import Blog from "@/models/Blog";
import Link from "next/link";
import Image from "next/image";

export default function Home({blogs}) {
    console.log(blogs)

  return (
    <div className="bg-dark w-100 p-1 ">
      <Head>  
        <title>NACHO BLOG | NEXT.JS</title>
        <meta name="description" content="Web creada por Nacho Chiappero" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      
      <main className="container">

       <div className="d-flex justify-content-center mt-5">
        <Image
          src="/Logo.png"
          width={100}
          height={100}
          >

          </Image>
        </div>

        <h1 className="text-center mt-3 text-light">MI HISTORIA</h1>

{/* Botón para ir a la página de agregar pelis */}



    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <Link href="/new">
          <div className="btn btn-primary w-100 my-2">
            Agregá tu experiencia de vida! (aparecerá debajo)
          </div>
          </Link>
        </div>
      </div>
    </div>

  <div className="row justify-content-center">
        {
          blogs.map(({_id, title, plot}) => (

            <div className="card mb-2 bg-dark text-light border-light shadow-lg col-12 col-md-10 col-lg-8" key={_id}>

              <div className="card-body">
                
                {/* Título del blog */}
                <div className="h5 text-uppercase"> {title}</div>

                {/* Descripción del blog */}
                <p className="fw-light">{plot}</p>


                {/* Botón para ir a la info de cada blog */}
                <Link href={`/${_id}`}>
                   <div className="btn btn-info btn-sm">Editar...</div>
                </Link>


              </div>
            </div>
          ))
        }


        {/* ///////////// CARTA INFO MÍA ////////////////////// */}
        <div className="card mb-2 light:bg-dark text-dark border-light 
        col-12 col-md-10 col-lg-8 ">

          <div className="card-body">
            
            {/* Título del blog */}
            <div className="h5 text-uppercase p-3">Quién soy? 🗺</div>


            {/* Conenedor del texto y de la imagen */}
            <div className="row">

              {/* Descripción del blog */}
              <div className="container  col-12 col-md-6">
                
                <p className="fw-light">Hola! Soy Nacho Chiappero! Soy de Santa Fe Capital, provincia de Santa Fe, Argentina. Te cuento que soy programador freelancer con experiencia en varias ramas de la tecnología como desarrollo web, de aplicaciones en varios lenguajes, un apasionado por la inteligencia artificial, y un curioso innato. Te voy a contar un poquito más de mi historia para que me conozcas mejor! Bienvenid@ ✨!</p>
              </div>


              {/* Imagen del blog */}
              <div className="container col-12 col-md-6 col-sm-6 position-relative ">
                <div style={{ width: '100%', maxWidth: '780px' }}>
                  
                  <Image
                    src="/perfil1.jpg"
                    layout="responsive"
                    width={300}
                    height={400}
                    alt="Perfil"
                    className="rounded rounded-3 overflow-hidden"
                  />
                </div>

              </div> 

 

            </div> {/* contenedor de el texto y de la imagen */}
          </div>
        </div>
        {/* //////////////////////////////////////////////////// */}
        

        {/* ///////////// CARTA INFO MÍA ////////////////////// */}
        <div className="card mb-2 light:bg-dark text-dark border-light col-12 col-md-10 col-lg-8">

          <div className="card-body">
            
            {/* Título del blog */}
            <div className="h5 text-uppercase">MIS PRIMEROS PASOS POR LA TECNOLOGÍA 🤖🚀💻</div>

          {/* Descripción del blog */}
          <p className="fw-light">Desde chico que me siento llamado por las computadoras, con 10 años tuve mi primera PC, que era la de la familia, y me sentí muy llamado por los juegos retro como Pokemon, Mario, Sonic, Doom, y sentía una curiosidad inmensa por saber cómo yo podría construir mi propio juego, contando una historia. A los 15 años me sentí llamado a crear mi propio servidor de mi juego preferido: Dofus, utilizando por primera vez conceptos de emuladores, base de datos y lenguaje de programación; básicamente chino para mí, pero por alguna razón me quería meter más y más a entender cómo funcionabaz todo, y me volvía loco la posibilidad de que yo pudiera crear y personalizar todo a mi gusto, así como unir a una comunidad en base a esos gustos.</p>
          </div>
        </div>
        {/* //////////////////////////////////////////////////// */}        
        
        {/* ///////////// CARTA INFO MÍA ////////////////////// */}
        <div className="card mb-2 light:bg-dark text-dark border-light col-12 col-md-10 col-lg-8">

          <div className="card-body">
            
            {/* Título del blog */}
            <div className="h5 text-uppercase">MIS CRISIS VOCACIONAL</div>

          {/* Descripción del blog */}
          <p className="fw-light">Fui siempre buen estudiante, pero al ir a un liceo militar durante la etapa de escuela secundaria hizo que mi brújula perdiera el rumbo, y no supiera qué hacer al salir del colegio. Hice un año de medicina, </p>
          </div>
        </div>
        {/* //////////////////////////////////////////////////// */}        
        
        
</div>        
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
