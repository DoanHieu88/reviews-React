import {useState} from 'react'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';
import people from '../config/data'

export default function Reviews() {
    const [index, setIndex] = useState(0);
    const {name,job,image,text} = people[index];

    const nextPerson = () =>{
        setIndex((index)=>{
            const newIndex = index + 1; 
            if(newIndex > people.length - 1){
               return 0
            }
            return newIndex
        })
    }

    const prevPerson = () =>{
        setIndex((index)=>{
            const newIndex = index - 1; 
            if(newIndex < 0){
               return people.length -1
            }
            return newIndex
        })
    }

    const randomPerson = () =>{
        setIndex(Math.floor(Math.random()*people.length))
    }

    return (
        <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn'  onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={()=>{nextPerson()}}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    )
}
