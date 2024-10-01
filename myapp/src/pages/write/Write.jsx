import './write.css'

export default function Write() {
  return (
    <div className='write'>

      <img className='writeImge' 
      src="https://images.pexels.com/photos/19880213/pexels-photo-19880213/free-photo-of-sea-and-mountain-view-in-kotor-bay-in-montenegro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      alt="" />
       <form action="writeForm">
         <div className="writeFormGroup">

            <label htmlFor='fileInput'>
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type='file' id='fileInput' style={{display:'none'}} />
            <input type="text" placeholder='TITLE' className='writeInput' autoFocus={true} />
         </div>

         <div className='writeFormGroup'>
          <textarea placeholder='tell your story ...' type='text' className='writeInput writeText' >
          </textarea>
         </div>

         <button className='writeSubmit'>Publish</button>
       </form>
    </div>
  )
}

