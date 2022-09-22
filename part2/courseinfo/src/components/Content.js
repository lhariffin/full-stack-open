import Part from "./Part"

const Content = (props) => {
    const {parts} = props

    // const totalExercises = () => {
    //     let total = 0
    //     parts.forEach(part => {
    //         console.log(part, total)
    //         total += part.exercises

    //     });
    //     return total
    // }

    const totalExercises = parts.reduce((s, p) => s + p.exercises, 0)

    return (
        <>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
        <strong>Total of {totalExercises} exercises</strong>
        </>
    )
}

export default Content