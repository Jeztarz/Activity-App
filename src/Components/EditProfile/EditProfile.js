import './EditProfile.css'

function EditProfile() {
    return (
        <div className="edit-profile-container edit-profile-page">


            {/* เปลี่ยนชื่อกับaboutme */}
            <form>
                <label htmlFor='addName'>Name </label>
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        id='addName'
                        className='input-edit'
                        // value={addNameActivity} 
                        />
                </div>

                <br/>
                
                <label htmlFor='addAbout'>About Me </label>
                <div>
                    <textarea
                        type="text"
                        name="username"
                        placeholder="Say something ...?"
                        id='addAbout'
                        className='input-edit'
                        // value={addNameActivity} 
                        />
                </div>




        {/* button click submit */}
        <button type="button" className='submit'>
            SUBMIT
        </button>

        </form>
        </div>

    )
};

export default EditProfile;