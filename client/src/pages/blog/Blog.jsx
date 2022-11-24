import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = (props) => {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${props.match.params.id}`)
            .then(res => {
                setBlog(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [props.match.params.id])
    return (
        <>
            <h1>Blog</h1>
            <div style={{background: "red", width: "fit-content", height: "fit-content"}}>
                <img src={blog.photo} alt={blog.photo} />
                <h2>{blog.title}</h2>
                <p>{blog.desc}</p>
                <h3>{blog.username}</h3>
                <h4>{blog.timestamps}</h4>
            </div>
            <Link to="/blog">Back to Blogs</Link>
        </>
    );

}

export default Blog;