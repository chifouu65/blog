import axios from "axios";
import React from "react";
import styled from "styled-components";

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
    `
const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    margin: 10px 0;
    `
const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #555;
    }
    `

const Post =  () => {
    const auth = localStorage.getItem('user');
    const user = JSON.parse(auth);
    let [title, setTitle] = React.useState("")
    let [desc, setDescription] = React.useState("")
    let [username, setUsername] = React.useState(user.email)
    let [category, setCategory] = React.useState("")

    const handleChange = (e) => {
        e.preventDefault()
        const Post = {
            title,
            desc,
            username,
            category,
        }
        axios.post('http://localhost:5000/posts', Post)
            .then(res => console.log(res.data))
            .then(alert('Post Created'))
            .catch(err => console.log(err))
    }
    return (
        <>
            <h1>POST</h1>
            <Form>
                <label htmlFor="title">Title</label>
                <Input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="desc">Description</label>
                <Input type="text" name="desc" id="desc" onChange={(e) => setDescription(e.target.value)}/>


                <label htmlFor="username">UserName : {username}</label>
                <Input/>

                <label htmlFor="category">Category</label>
                <Input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)}/>

                <Button onClick={handleChange} type="submit">Post</Button>
            </Form>
        </>
    )
}

export default Post;

