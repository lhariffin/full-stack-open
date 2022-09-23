const Filter = (props) => {
    const {handleNameFilter, nameFilter} = props
    return (
        <input value={nameFilter} onChange={handleNameFilter}/>
    )
}

export default Filter