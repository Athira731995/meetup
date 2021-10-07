import React from 'react'
import { Card } from '../ui/Card'
import './NewMeetupForm.css'
import { useRef } from 'react'
export const NewMeetupForm = () => {
const submitHandler=(event)=>{
    event.preventDefault()

    
    const titleInputRef=useRef()
    const imaInputRef=useRef()
    const titleInputRef=useRef()
    const titleInputRef=useRef()
    const enteredtitle=titleInputRef.current.value
}
    return (
        <div>
            <Card>
                <form className="form" onSubmit={submitHandler}>
                    <div className="control">
                        <label>Meetup Title</label>
                        <input type="text" required id="title"  ref={titleinputRef} />
                        </div>
                        <div className="control">
                        <label>Meetup Image</label>
                        <input type="url" required id="image" />
                        </div>
                        <div className="control">
                        <label>Meetup Address</label>
                        <input type="text" required id="address" />
                        </div>
                        <div className="control">
                        <label>Meetup Title</label>
                        <textarea required id="description" rows="5" >

                        </textarea>
                        </div> 
                        <div className="actions">
                            <button>Add Meetup</button>
                        </div>
                   
                </form>
            </Card>
        </div>
    )
}
