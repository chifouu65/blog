import axios from "axios";
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/posts")
            .then(res => {
                setBlogs(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    })
    return (
        <>
            <h1>Blogs</h1>
            {blogs.map(blog => (
                <div key={blog._id} style={{background: "red", width: "fit-content", height: "fit-content"}}>
                    <Link to={`/blog/${blog._id}`}>
                        <img src={blog.photo} alt={blog.photo} />
                        <h2>{blog.title}</h2>
                        <p>{blog.desc}</p>
                        <h3>{blog.username}</h3>
                        <h4>{blog.timestamps}</h4>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default Blogs;
