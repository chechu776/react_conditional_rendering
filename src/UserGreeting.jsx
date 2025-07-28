
function UserGreeting(props){
    return (props.isLoggedIn ? <h2 className="bg-green-500">Welcome {props.username}</h2> : <h2 className="bg-red-600">Please Log in to continue</h2>)
}
export default UserGreeting