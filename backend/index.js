const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()
const multer = require("multer")
const path = require("path")
const cors = require("cors")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")

dotenv.config()
app.use("/images", express.static(path.join(__dirname, "/images")))
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage: storage})
app.post("/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploaded successfully")
    } catch (err) {
        console.log(err)
    }
})

app.use("/auth", authRoute)
app.use("/user", userRoute)
app.use("/posts", postRoute)
app.use("/category", categoryRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})