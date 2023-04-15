import React, {useEffect, useState } from 'react';
import { Article } from './Article';
import Input from './Input';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import './App.css'
import Remove from './Completed';
import { Select } from './SelectDone';
import Portal from './Portal/Portal';




export default function ToDo() {
  const [articles, setArticles] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [modal,setModal]=useState(false)
  const [activeSetid,SetACtiveId]=useState(null)

  const handleAddData = () => {
    if(inputValue === ''){
      return false
    }
    setArticles((prevState) => {
      return [
        {
          isCompleted:true,
          id: Math.floor(Math.random() * 100),
          title: inputValue,
        },
        ...prevState,
      ];
    });
    setInputValue('')
  };

  const handleDeleteData = () => {
    
    const removeItem = articles.filter((todo) => {
      return todo.id !== activeSetid;
    });
    setArticles(removeItem);   
    setModal(false)
  };

  const remove = () => {
    setArticles([])
    setModal(false)
 }

 const done = (elem)=>{
   setArticles((prevState)=>{
    const list = prevState.filter((el)=>el.id !==elem.id);
    return [
      ...list,
      {
        ...elem,
        isCompleted:!elem.isCompleted
      }
    ]
   
  })
 }
 console.log(articles);
 console.log(activeSetid)
  return (
    <div className='container'>
      <div className='block'>
       <div className='title'>
        <h2>ToDo App</h2>
      </div>
      <div className='addItemsInput'>
      <Input onChange={setInputValue} value={inputValue}/>
       <AddButton onClick={handleAddData} />
      </div>
      {articles.map((article) => (
        <div className='item-wraper' style={{textDecoration: article.isCompleted ? 'none' : "line-through",}}key={article.id}>
          <div className='checked'>
          <Select   onClick ={() => done(article)}/>
          </div>
          <Article item={article} />
          <DeleteButton onClick={() =>{
            SetACtiveId(article.id)
            setModal(true)}
          }
             />
        </div>
      ))}
      <div>
      </div>
      <Remove onClick={remove} length={articles.length} />
       <main>
        {
            modal &&
            <Portal onClick={handleDeleteData} cancel={()=>setModal(false)}/>
        }
      </main>
    </div>
    </div>
  );
}
