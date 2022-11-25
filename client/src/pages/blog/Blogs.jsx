import axios from "axios";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import styled from 'styled-components'

const BlogPage = styled.section`
display: flex;
flex-direction: column;
padding: 0 20px;
padding-top: 20px;
`
const BlogContainer = styled.ul`
display: flex;
grid: 1fr 1fr 1fr;
grid-gap: 1rem;
margin-top: 20px;
flex-wrap: wrap;
width: 100%;
`
const BlogCard = styled.div`
width: 100%;
height: 200px;
background-color: #dddddd;
border-radius: 5px;
`
const BlogText = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 100%;
padding: 0 20px;
h2 {
    text-transform: uppercase;
}
h3 {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
}
`
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
        <BlogPage>
            <h1>Blogs</h1>
            <BlogContainer>
            {blogs.map(blog => (
                <BlogCard key={blog._id}>
                    <Link to={`/blog/${blog._id}`}>
                        <BlogText>
                        <h2>{blog.title}</h2>
                        <p>{blog.desc}</p>
                        <h3><span>{blog.username}</span><span>date en atyeyye</span></h3>
                        </BlogText>
                    </Link>
                </BlogCard>
            ))}
          </BlogContainer>
        </BlogPage>
    );
}

export default Blogs;
