import axios from "axios";
import React from "react";

const Post = () => {
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [username, setUsername] = React.useState("")
    const handleChange = (e) => {
        e.preventDefault()
        const Post = {
            title,
            description,
            username,
        }
        axios.post('http://localhost:5000/post', Post)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <>
        
        </>
     )    
}

export default Post;

