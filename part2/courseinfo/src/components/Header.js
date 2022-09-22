const Header = (props) => {
    const {text, strength} = props
    switch(strength) {
        case '2':
            return (
                <h2> {text} </h2>
            )
        case '3':
            return (
                <h3> {text} </h3>
            )
        case '1':
        default:
            return (
                <h1> {text} </h1>
            )
    }
}

export default Header 