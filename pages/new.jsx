import Form from "@/components/Form";
import Head from "next/head"

const New = () => {

    const formData = {
        title: '',
        plot: ''
    }

  return (

    <div className="container">
        <Head>  
        <title>AGREGAR | NACHO BLOG</title>
        <meta name="description" content="Web creada por Nacho Chiappero" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <h1 className="my-3">Agregar experiencia</h1>


      <Form formData ={formData}/>
    </div>
  );
};

export default New
