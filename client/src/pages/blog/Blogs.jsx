import axios from "axios";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import styled from 'styled-components'
const Bar = styled.div`
min-height: 1px;
width: 100%;
background-color: rgba(0,0,0,0.5);
content: "";
margin: 10px auto;
`
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
background-color: #f1f1f1;
border-radius: 15px;
padding: 20px;
width:100%;
a > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
`
const BlogText = styled.div`
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
    const [user , setUser] = useState(JSON.parse(localStorage.getItem("user")))
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
            { user ? 
            <Link to='/post'>Create post</Link> : null
            }
            <BlogContainer>
            {blogs.map(blog => (
                <BlogCard key={blog._id}>
                    <Link to={`/blog/${blog._id}`}>
                        <BlogText>
                        <h2>{blog.title}</h2>
                         <Bar/>
                        <p>{blog.desc}</p>
                         <Bar/>
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
