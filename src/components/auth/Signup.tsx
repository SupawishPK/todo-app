import React from 'react'

interface SignupProps {
    renderLogin: ()=> void
}

const SignUp = ({renderLogin}: SignupProps) => {

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")

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
                <button className="rounded-lg px-6 py-3 font-bold bg-green-400 text-white">Signup</button>
            </div>
        </div>
    )
}

export default SignUp
