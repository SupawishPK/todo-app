import React from 'react'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'

const Landing = () => {

    const [isSignUp , setIsSignUp] = React.useState<boolean>(false)

    return (
        <div className="flex w-full h-screen">
            <div className="w-1/2 max-w-xs mx-auto relative">
                <div className="absolute inset-0 m-auto" style={{height: '300px'}}>
                    {isSignUp ? <Signup renderLogin={()=> setIsSignUp(false)} /> : <Login renderSignup={()=> setIsSignUp(true)} />}
                </div>
                
            </div>
                
                {/** username */}
                {/**password */}
                {/** login button*/}
                {/** SignUp */}
            <div className="w-1/2 bg-green-400">

            </div>
            
        </div>
    )
}

export default Landing
