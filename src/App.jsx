import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import CreateArea from './CreateArea';

function App(){
     
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    const [notes, setNotes] = useState([]);

    function handleInput(event){
        const {name, value} = event.target;
        setInputText(prevItems=>{
            return {
                ...prevItems,
                [name] : value
            }
        });
    }

    function handleClick(event){
        event.preventDefault();
        setNotes(prevItems=>{
            return [...prevItems, inputText]
        });
    }

    function deleteItem(id){
        setNotes(prevItems=>{
            return prevItems.filter((note, index)=>{
                return index !== id
            })
        });
    }

    return(
        <div>
            <Header />
            <CreateArea onChange={handleInput} onClick={handleClick}/>
            {notes.map((note, index)=>{
                return <Note key={index} id={index} title={note.title} content={note.content} onClick={deleteItem}/>
            })}
            <Footer />
        </div>
    )
}

export default App;