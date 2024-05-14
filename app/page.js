"use client"

import Modal from "@/components/Modal"
import { useState } from "react"
const page = () => {

  const [showModal , setShowModal] = useState(false)
  return (
    <div>
      <div>
      <h1>Modal Usage</h1>
      </div>
      <div>
        <button className="p-5 bg-black text-white " onClick={() => {
          setShowModal(true);
        }}>Click me</button>
      </div>
      <Modal isVisible={showModal} onClose={() => {
        setShowModal(false);
      }}/>
      

    </div>
  )
}

export default page
