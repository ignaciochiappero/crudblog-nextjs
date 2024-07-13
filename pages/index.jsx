// PAGINA PRINCIPAL DEL PROYECTO

import Head from "next/head";
import conectarDB from "@/lib/dbConnect";
import Blog from "@/models/Blog";
import Link from "next/link";
import Image from "next/image";

import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";


const urbanist = Urbanist({ subsets: ["latin"] });

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

        <div className="text-center mt-3 text-light">
        <h1 className={urbanist.className} ><span className="text-orange">Mi</span> HISTORIA</h1>
        </div>

{/* Botón para ir a la página de agregar pelis */}



    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          
          <Link href="/new">
          <div className="btn btn-orange w-100 my-2">
            Agregá tu experiencia de vida! (aparecerá debajo)
          </div>
          </Link>
        </div>
      </div>
    </div>

  <div className="row justify-content-center">


    <div className="card mb-2 bg-dark text-light border-light shadow-lg col-12 col-md-10 col-lg-8">

      <div className="card-body">

        {/* Título del blog */}
        <div className="h5 text-uppercase text-orange"> SUMÁ TU EXPERIENCIA DE VIDA!</div>

        {/* Descripción del blog */}
        <p className="fw-light">Así como abajo yo te cuento un poquito de mi vida, me encantaría que vos me dejes un poquito de la tuya, podés agregarla, editarla cuando quieras, y va a aparecer en este blog para que todos juntos la leamos. Gracias por compartir este ratito conmigo 🤍</p>

      </div>

    </div>
    
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



        {/* ///////////// CARTA QUIEN SOY////////////////////// */}
        <div className="card mb-2 light:bg-dark text-dark border-light 
        col-12 col-md-10 col-lg-8 ">

          <div className="card-body">
            
            {/* Título del blog */}
            <div className="h5 text-uppercase p-3">Quién soy? 🗺</div>


            {/* Conenedor del texto y de la imagen */}
            <div className="row">




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


              {/* Descripción del blog */}
              <div className="container  col-12 col-md-6 d-flex  align-items-center">
                
                
                <p className="fw-light">Hola! Soy Nacho Chiappero! Soy de Santa Fe Capital, provincia de Santa Fe, Argentina. Te cuento que soy programador freelancer con experiencia en varias ramas de la tecnología como desarrollo web, de aplicaciones en varios lenguajes, un apasionado por la inteligencia artificial, y un curioso innato. Te voy a contar un poquito más de mi historia para que me conozcas mejor! Bienvenid@ ✨!</p>
              </div>


 

            </div> {/* contenedor de el texto y de la imagen */}
          </div>
        </div>
        {/* //////////////////////////////////////////////////// */}
        

        {/* ///////////// CARTA PRIMEROS PASOS EN TECNOLOGÍA ////////////////////// */}
        <div className="card mb-2 light:bg-dark text-dark border-light col-12 col-md-10 col-lg-8">

          <div className="card-body">
            
            {/* Título del blog */}
            <div className="h5 text-uppercase">MIS PRIMEROS PASOS POR LA TECNOLOGÍA 🤖🚀💻</div>

          {/* Descripción del blog */}
          <p className="fw-light">Desde chico que me siento llamado por las computadoras, con 10 años tuve mi primera PC, que era la de la familia, y me sentí muy llamado por los juegos retro como Pokemon, Mario, Sonic, Doom, y sentía una curiosidad inmensa por saber cómo yo podría construir mi propio juego, contando una historia. A los 15 años me sentí llamado a crear mi propio servidor de mi juego preferido: Dofus, utilizando por primera vez conceptos de emuladores, base de datos y lenguaje de programación; básicamente chino para mí, pero por alguna razón me quería meter más y más a entender cómo funcionabaz todo, y me volvía loco la posibilidad de que yo pudiera crear y personalizar todo a mi gusto, así como unir a una comunidad en base a esos gustos.</p>
          </div>
        </div>
        {/* //////////////////////////////////////////////////// */}        
        

        {/* ///////////// CARTA ARTE ////////////////////// */}
        <div className="card mb-2 light:bg-dark text-dark border-light col-12 col-md-10 col-lg-8">

          <div className="card-body">
            
            {/* Título del blog */}
            <div className="h5 text-uppercase p-3">MI CRISIS VOCACIONAL 🎨🖌️</div>

            {/* Contenedor del texto y de la imagen */}
            <div className="row align-items-center">

              {/* Contenedor de la imagen */}
              <div className="col-12 col-lg-6">
                <div style={{ position: 'relative', width: '100%', paddingBottom: '75%' }}>
                  <Image
                    src="/arte2.jpg"
                    layout="fill" // Ocupa todo el espacio del contenedor
                    objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                    alt="Perfil"
                    className="rounded rounded-3 overflow-hidden"
                  />
                </div>
              </div>

              {/* Contenedor del texto */}
              <div className="col-12 col-lg-6">
                <p className="fw-light p-3">Al ir a una escuela militar durante la secundaria, salí más perdido de lo que entré frente a mi futuro profesional, pasé por Medicina, por Educación Física, hasta que terminé decidiéndome por un Profesorado en Artes Visuales, ya que la creatividad y la curiosidad siempre fueron un rasgo fuerte en mi vida, y transitándola pude reforzar y perfeccionar al máximo aspectos en mi sentido estético, así como el dominio de herramientas de diseño, que sin dudas me ofreció un talento del cual me enorgullezco, aunque... al terminar mi carrera, con el mejor promedio de mi promoción inclusive, me sentí muy vacío, porque me había autoconvencido de que esa era mi pasión, pero tenía claro que mi horizonte se encontraba en otro lugar...</p>
              </div>

            </div> {/* contenedor del texto y de la imagen */}
          </div>
        </div>
        {/* //////////////////////////////////////////////////// */}


        {/* ///////////// CARTA COLLAGE HORIZONTAL ////////////////////// */}
        <div className="card mb-2 light:bg-dark text-dark border-light col-12 col-md-10 col-lg-8">

          <div className="card-body">
            
            

            {/* Contenedor del collage horizontal y del texto */}
            <div className="row align-items-center">

              {/* Collage horizontal de imágenes */}
              <div className="col-12 col-md-8 order-md-2">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="w-100 mb-2 order-2 order-md-1">
                    <Image
                      src="/docencia1.jpg"
                      layout="responsive" // Ajusta al tamaño del contenedor
                      width={600}
                      height={400}
                      alt="Foto 1"
                      className="rounded rounded-3 overflow-hidden"
                    />
                  </div>
                  <div className="w-100 mb-2 order-1 order-md-2">
                    <Image
                      src="/docencia2.jpg"
                      layout="responsive" // Ajusta al tamaño del contenedor
                      width={600}
                      height={400}
                      alt="Foto 2"
                      className="rounded rounded-3 overflow-hidden"
                    />
                  </div>
                  <div className="w-100 mb-2 order-3 order-md-3">
                    <Image
                      src="/docencia3.png"
                      layout="responsive" // Ajusta al tamaño del contenedor
                      width={600}
                      height={400}
                      alt="Foto 3"
                      className="rounded rounded-3 overflow-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Descripción del blog */}
              
              <div className="col-12 col-md-4 order-md-1 mt-3">
                {/* Título del blog */}
                <div className="h5 text-uppercase p-3">MI EXPERIENCIA DOCENTE 👨🏼‍🏫</div>

                <p className="fw-light p-3">Hace unos 5 años ya que trabajo como profesor de Artes Visuales y de Tecnología, y justamente por esta última área volví a redescubrirme, y animarme por fin a encarar mi verdadera pasión que hace tanto tiempo antes había abandonado como un objetivo personal: la ciencia, la computación y la ingeniería. Desarrollé en las instituciones que trabajé múltiples proyectos de ciencia, computación e ingeniería, impulsando la programación y la robótica como campos del saber emergentes, logrando varias decenas de impresionantes resultados, y, sobre todo, aprendiendo de una manera impresionante conceptos relacionados a la electrónica, robótica, programación, mecánica, matemáticas y física. </p>
              </div>

            </div> {/* contenedor del collage horizontal y del texto */}
          </div>
        </div>
        {/* //////////////////////////////////////////////////// */}


                {/* ///////////// CARTA QUIEN SOY////////////////////// */}
                <div className="card mb-2 light:bg-dark text-dark border-light 
        col-12 col-md-10 col-lg-8 ">

          <div className="card-body">
            
            {/* Título del blog */}
            <div className="h5 text-uppercase p-3">YO, UN PROGRAMADOR? 👨🏼‍💻</div>


            {/* Conenedor del texto y de la imagen */}
            <div className="row">


              {/* Descripción del blog */}
              <div className="container  col-12 col-md-6 d-flex  align-items-center">
                
                
                <p className="fw-light">Hace ya 3 años y poquito más dije: ¿y por qué no?. Teniendo una carrera encima, empezar otro nuevo y largo camino... Pero sí, así fue, con todos los miedos, síndrome del impostor y muchas cosas más que nos rodean a los que trabajamos en esta jungla virtual, encaré mi nuevo camino como desarrollador, camino el cual cada día me entusiasma más, donde aprendo en todo momento algo nuevo, haciendo la carrera como puedo, teniendo en cuenta que trabajo muchísimo (hice 1 año de ingeniería en Sistemas, y me cambié a ingeniería en Inteligencia Artificial porque ahí está el futuro de la tecnología; todo esto a la par de mi trabajo como profesor), y a día de hoy sigo aprendiendo constantemente, pero con varios e interesantes proyectos encima, desarrollando juegos, web, apps, y apuntando a dedicarme completamente a esto que, sin dudas, es lo que me mueve todos los días a perfeccionarme y a ofrecer soluciones y servicios innovadores, de calidad y humanos, al mundo. Te agradezco de todo corazón por haber compartido este ratito conmigo, sin dudas te llevás ahora un pedacito de mí. Te mando un abrazo enorme.</p>
              </div>

              {/* Imagen del blog */}
              <div className="container col-12 col-md-6 col-sm-6 position-relative ">
                <div style={{ width: '100%', maxWidth: '780px' }}>
                  
                  <Image
                    src="/programando.jpg"
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






        
</div>        
      </main>

<Footer/>

      
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
