import conectarDB from "@/lib/dbConnect";
import Blog from "@/models/Blog";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

const BlogPage = ({ success, error, blog }) => {
  const router = useRouter();

  if (!success) {
    return (
      <div className="bg-dark min-vh-100 d-flex align-items-center justify-content-center">
        <div className="container text-center my-5">
          <h1 className="text-light">{error} 🤦‍♂️</h1>
          <Link href="/">
            <div className="btn btn-success">Volver</div>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const deleteData = async (id) => {
    try {
      await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <Head>
        <title>BLOGS | NACHO BLOG</title>
        <meta name="description" content="Web creada por Nacho Chiappero" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        <div className="text-center text-light mt-5">
          <h1 className={urbanist.className}>
            Detalle del <span className="text-orange">Blog</span> 👾
          </h1>
        </div>

        <div className="card bg-light mt-3 p-4 text-center text-dark">
          <h5 className="text-uppercase">{blog.title}</h5>
          <p className="fw-light">{blog.plot}</p>

          <div className="d-flex justify-content-center">
            {/* Botón para volver al inicio */}
            <Link href="/">
              <div className="btn btn-primary text-light btn-sm me-2">
                Volver...
              </div>
            </Link>

            {/* Botón para editar el blog */}
            <Link href={`/${blog._id}/edit`}>
              <div className="btn btn-warning btn-sm me-2">Editar</div>
            </Link>

            {/* Botón para eliminar el blog */}
            <button
              className="btn btn-orange btn-sm"
              onClick={() => deleteData(blog._id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;

export async function getServerSideProps({ params }) {
  try {
    await conectarDB();

    const blog = await Blog.findById(params.id).lean();

    if (!blog) {
      return { props: { success: false, error: "BLOG NO ENCONTRADO!!! 🙀" } };
    }

    blog._id = `${blog._id}`;

    return { props: { success: true, blog } };
  } catch (error) {
    console.error("Server error:", error);

    if (error.kind === "ObjectId") {
      return { props: { success: false, error: "ID no válido" } };
    } else {
      return { props: { success: false, error: "Error del Servidor" } };
    }
  }
}
