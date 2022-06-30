import React from 'react';

export default function CreateArea (props) {
    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={props.onChange} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.onChange}/>
                <button onClick={props.onClick}>Add</button>
            </form>
    </div>
    )
    
}