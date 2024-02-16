import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image: {type: String, required: true},
  text: { type: String, required: true},
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comment:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
})

const Post = mongoose.models.Post || mongoose.model("Post", postSchema)

export default Post;