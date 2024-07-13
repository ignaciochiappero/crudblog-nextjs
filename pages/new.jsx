import Form from "@/components/Form";
import Head from "next/head";
import Footer from "@/components/Footer";

const New = () => {
  const formData = {
    title: '',
    plot: ''
  };



  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <Head>  
        <title>AGREGAR | NACHO BLOG</title>
        <meta name="description" content="Web creada por Nacho Chiappero" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <div className="container flex-grow-1">
        <div className="my-5 text-light text-center">
          <h1 className="font-urbanist">Agregar <span className="text-orange">experiencia</span></h1>
        </div>
        <Form formData={formData} />
      </div>

      <Footer />
    </div>
  );
};

export default New;
