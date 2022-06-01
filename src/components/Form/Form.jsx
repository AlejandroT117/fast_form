import { useEffect, useState } from "react"
import { List } from "../List/List"

export const Form =()=>{
  const [values, setValues] = useState(null)
  const [data, setData] = useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()
    setData([...data, values])
    setValues(null)
  }

  const handleInput=(e)=>{
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
  }

  return(
    <>
      <form action="" className="form" onSubmit={handleSubmit} >
        <input type="text" name="name" id="" className="name" onChange={handleInput} placeholder='nombre' value={values?.name || ""}/>
        <input type="tel" name="tel" id="" className="tel" onChange={handleInput} placeholder='Teléfono' value={values?.tel || ""}/>
        <input type="date" name="date" id="" placeholder="fecha de nacimiento" onChange={handleInput} value={values?.date || ""}/>
        <input type="submit" value="Enviar" />
      </form>
      <List data={data}/>
    </>
  )
}