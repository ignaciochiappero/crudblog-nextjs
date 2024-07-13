import Form from "@/components/Form";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("Ha ocurrido un error obteniendo los datos");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  const { data } = await res.json();

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
    plot: blog.plot,
  };

  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <div className="container flex-grow-1">
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto text-light p-5 rounded">
            <div className="text-center mb-4">
              <h1 className={urbanist.className}>
                Editar <span className="text-orange"> Blog</span> ✍🏼
              </h1>
            </div>
            <Form forNewBlog={false} formData={formData} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditBlog;
