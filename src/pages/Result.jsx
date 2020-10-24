import React from "react"
import { useParams } from "react-router-dom"

const Result = () => {
  const { name } = useParams();

  return (
    <>
      <h1> Result </h1>
      <h1> {name} </h1>
    </>
  )
};

export default Result;