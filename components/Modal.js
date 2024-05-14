
const Modal = ({isVisible , onClose}) => {

  

  if(isVisible === false){
    return null;
  }

  const handleClose = (e) => {
    if(e.target.id === "wrapper"){
      onClose();
    }  
  }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur flex justify-center items-center' onClick={handleClose} id="wrapper">
      <div className="w-[600px] flex flex-col">
        <button className="text-white text-xl place-self-end" onClick={() => {
          onClose();
        }}>X</button>
        <div className="bg-white p-2 rounded">
          Modal
        </div>
      </div>
    </div>
  )
}

export default Modal
