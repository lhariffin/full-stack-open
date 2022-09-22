import Header from "./Header"
import Content from "./Content"

const Course = (props) => {
    const {course} = props
    const {id, name, parts} = course
    return (
        <div>
            <Header text={name} strength='2' />
            <Content parts={parts}/>
        </div>
    )
  }
  
  export default Course