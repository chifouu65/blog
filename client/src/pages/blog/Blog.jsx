import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const Blog = () => {
    const id = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id.id}`)
            .then(res => {
                setBlog(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])
    const updateAt = new Date(blog?.updatedAt).toDateString();
    return (
        <>
            {blog ? (
                <div style={{width: "100%", height: "fit-content"}}>
                    <h2>Title: {blog.title}</h2>
                    <p>Desc: {blog.desc}</p>
                    <h3> creator: {blog.username} / <span>{updateAt}</span></h3>
                </div>
            ) : (
                <h1>Search...</h1>
            )}
        </>
    );

}

export default Blog;