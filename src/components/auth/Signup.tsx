import React from 'react'
import axios from 'axios'
interface SignupProps {
    renderLogin: ()=> void
}

const SignUp = ({renderLogin}: SignupProps) => {

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")

    const [disabled, setDisabled] = React.useState(false)

    React.useEffect(()=>{
        if(password === confirmPassword) setDisabled(false)
        else setDisabled(true)
    }, [password, confirmPassword])

    const onSubmit = () => {
        axios.post('/signup' , {
            username: username,
            password: password
        }).then(res => console.log(res))
    }

    return (
        <div style={{height: '300px'}}>
            <h1 className="text-center text-green-400 font-bold" >Signup</h1>
            <div className="mb-4">
                <label>Username</label>
                <input onChange={(e)=> setUsername(e.target.value)} className="w-full p-3 border border-gray-400 rounded-md" type="text" placeholder="username" />
            </div>
            <div className="mb-4">
                <label>Password</label>
                <input onChange={(e)=> setPassword(e.target.value)} className="w-full p-3 border border-gray-400 rounded-md" type="password" placeholder="password" />
            </div>
            <div className="mb-4">
                <label>ConfirmPassword</label>
                <input onChange={(e)=> setConfirmPassword(e.target.value)} className="w-full p-3 border border-gray-400 rounded-md" type="password" placeholder="password" />
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p>Already a member <span className="text-green-400 cursor-pointer" onClick={()=> renderLogin()}>Login</span></p>
                </div>
                <button className={`rounded-lg px-6 py-3 font-bold text-white ${disabled ? "bg-gray-400" : "bg-green-400"} }`} disabled={disabled} onClick={()=> onSubmit()}>Signup</button>
            </div>
        </div>
    )
}

export default SignUp
