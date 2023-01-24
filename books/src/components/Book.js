import './Book.css'
const Book = (props) => {
  return (
    <div className="book">
            <img src={props.img} alt="" />
            <p>Title : {props.name}</p>
            <p>Author : {props.author}</p>
    </div>
  )
}

export default Book;