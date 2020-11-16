import React from 'react'

const uploadimage = () => {

const[title, setTitle]=useState("");
const[title, setfile]=useState();

const formData= new FormData()
formData.append("title",title)
formData.append("picture",file)

    const handleSubmit = (event)=>{
        event.preventDefault();
        const response = await axios.post("url du server",formData,{
            headers:{
                authorization:"Bearer"+token,
            }
        })   
        console.log(response.data);
    };

    return (
        <div>
          <form>
            <input type="text"
            value={title}
            onChange
            />  
            <br/>
            <input type="text"/>
        </form>  
          
        </div>
    )
}

export default uploadimage
