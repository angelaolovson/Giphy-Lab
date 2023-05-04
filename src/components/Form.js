import { useState } from "react";

const Form = (props) => {
    const [formData, setFormData] = useState({searchTerm: ""})

    const handleChange = (event) => {
        console.log(event)
        setFormData ({
            ...formData,[event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <input 
                type="text"
                name="searchTerm"
                value={formData.searchTerm}
                onChange={handleChange}
            />
            <input type="submit" value="Submit" />
        </div>
    )
}

export default Form;