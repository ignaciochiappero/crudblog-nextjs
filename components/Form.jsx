
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


const Form = ({formData, forNewBlog = true }) => {
  
// LÓGICA DEL FORMULARIO   
  const router = useRouter();

  const [form, setForm] = useState({
      title:formData.title,
      plot: formData.plot,
  });


  const [message, setMenssage] = useState([])

  const handleChange = e => {
      const {value, name} = e.target
      setForm({
          ...form,
          [name]: value
      })
  }


  const handleSubmit = e => {
      e.preventDefault();

      if (forNewBlog){

        postData(form);

      }
      else {
        putData(form )
      }

  }


  // Función para modificar la data llenada por el usuario

  const putData = async (form) => {

    //Array vacío para que se borren todas las palabras
    setMenssage([]);
    
    const {id} = router.query;
    
    try{

        const res = await fetch (`/api/blog/${id}`,{
            method:'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(form)

        })

        const data = await res.json();
        console.log(data);

        if (!data.success){
            
            for (const key in data.error.errors){
                let error = data.error.errors[key];
                setMenssage(oldmenssage => [
                    ...oldmenssage,
                    {message: error.message}
                ]);
            }
            
        }
        else{
            //Array vacío para que se borren todas las palabras
            setMenssage([]);
            router.push('/');
        }


    

    } catch (error){
        console.log(error)
    }

  }



  // Función para postear la data llenada por el usuario
  const postData = async (form) => {
      try{

          console.log(form);

          const res = await fetch ('/api/blog',{
              method:'POST',
              headers: {
                  "Content-type": "application/json"
              },
              body: JSON.stringify(form)

          })

          const data = await res.json();
          console.log(data);

          if (!data.success){
              
              for (const key in data.error.errors){
                  let error = data.error.errors[key];
                  setMenssage(oldmenssage => [
                      ...oldmenssage,
                      {message: error.message}
                  ]);
              }
              
          }
          else{
              router.push('/');
          }


      

      } catch (error){
          console.log(error)
      }
  }

  
  
// RETURN QUE MUESTRA EL FORMULARIO AL USSER  
  return (
    
    <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          className="form-control my-2"
          placeholder="Título de la Experiencia"
          autoComplete="off"
          name="title"
          value={form.title}
          onChange={handleChange} 
      />

      <input 
          type="text" 
          className="form-control my-2"
          placeholder="Descripción de la experiencia"
          autoComplete="off"
          name="plot"
          value={form.plot}
          onChange={handleChange} 
      />

      <button className="btn btn-primary w-100" type="submit">

        {/* Con esto podemos agregar contenido dinámico personalizado */}
        {forNewBlog ? 'Agregar' : 'Editar'}

      </button>

      <Link href="/">
          <div className="btn btn-warning w-100 my-2">Volver...</div>
      </Link>

          {
              message.map(({message} )  => (
                  <p key={message}>{message}</p>
              ) )
          }
  </form>
  )
}

export default Form
