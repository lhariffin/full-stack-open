import "../index.css"

const Notification = ({notif}) => {
    const {type, message} = notif
    // const error = {
    //     color: 'red',
    //     background: 'lightgrey',
    //     fontSize: 20,
    //     borderStyle: 'solid',
    //     borderRadius: 5,
    //     padding: 10,
    //     marginBottom: 10
    // }
    // const valid = {
    //     color: 'green',
    //     background: 'lightgrey',
    //     fontSize: 20,
    //     borderStyle: 'solid',
    //     borderRadius: 5,
    //     padding: 10,
    //     marginBottom: 10
    // }

    if (message === null) {
        return null
    }
    // switch(type) {
    //     case 'error':
    //         return (
    //             <div style={error}>
    //                 {message}
    //             </div>
    //         )
    //     case 'valid':
    //     default:
    //         return (
    //             <div style={valid}>
    //                 {message}
    //             </div>
    //         )
    // }
    return (
        <div className={type}>
            {message}
        </div>
    )
    
}

export default Notification