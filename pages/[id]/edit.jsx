import Form from "@/components/Form";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    
    const error = new Error ("Ha ocurrido un error obteniendo los datos");

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const {data} = await res.json();

  return data;
};
  

function EditBlog() {

  const router = useRouter();
  const { id } = router.query;

  const { data: blog, error } = useSWR(id ? `/api/blog/${id}` : null, fetcher);

  if (!blog) {
    return (
      <div className="container mt-5 text-center">
        <h1>Cargando... </h1>
      </div>
    );
  }


  const formData = {
    title: blog.title,
    plot: blog.plot
  };



  return (
    <div className="container">
      <h1 className="text-center">Editar Blog ✍🏼</h1>

      <Form
        forNewBlog={false}
        formData={formData}
      >
      </Form>

    </div>
  );
}

export default EditBlog;
