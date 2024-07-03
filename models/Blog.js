import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "por favor ingresá el título del blog!"]
    },

    plot: {
        type: String,
        required: [true, "por favor ingresá la descripción del blog!"]
    }
})

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)