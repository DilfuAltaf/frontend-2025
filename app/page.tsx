"use client"

import Button from "./component/Button"
import InputText from "./component/InputText"
import Label from "./component/Label"

export default function Home() {
  return (
    <div className="px-96 flex flex-col justify-center h-screen">
      <div className="flex  gap-1 flex-col" >
        <Label title="Name" color="red" />
        <InputText
          isError
          messageError="Masukkan Username"
          onChange={() => {
            alert("Hello")
          }} type="text" name="name" placeholder="Name" />
        <Label title="Email" color="blue" text="lg" />
        <InputText
          isError
          messageError={"Masukkan Email"}
          onChange={() => {
            alert("Hello")
          }} type="email" name="email" placeholder="Email" />
        <Label title="Password" color="green" text="xl" />
        <InputText
          isError
          messageError="Masukkan Password"
          onChange={() => {
            alert("Hello")
          }} type="password" name="password" placeholder="Password" />
      </div>
      <div className="flex gap-4 mt-8 flex-col">
        <Button title="Submit" colorSchema="blue" variant="solid" />
        <Button title="Submit" colorSchema="blue" variant="outline" />
      </div>
    </div>
  )
}