import './write.css'

export default function Write() {
  return (
    <div className='write'>
       <form action="writeForm">
         <div className="writeFormGroup">

            <label htmlFor='fileInput'>
            <i class="fa-solid fa-plus"></i>
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
