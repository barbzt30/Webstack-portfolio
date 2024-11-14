import Link from "next/link"
export default function Login () {
    return (
        <div>
            <div 
            className=" bg-[url('@/public/night_bg.png')] bg-cover bg-center h-screen w-full flex justify-center items-center"
            >
                <div className=" bg-[url('@/public/night_bg.png')] bg-cover bg-center border text-white h-96 w-72 rounded-xl p-3 text-center flex justify-center items-center">
                    <div>
                        <p className="font-serif font-bold text-2xl">Login</p>
                        <p>Welcome Back to the Weather App</p>
                        <form action="" className="mt-7">
                            <input type="email" name="email" id="login_email" placeholder="Email" className=" rounded-xl pl-2" />
                            <br />
                            <input type="password" name="password" id="login_password" placeholder="Password" className=" mt-6 rounded-xl pl-2" />
                            <br />
                            <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 w-20 rounded-full mt-10">Login</button>
                        </form>
                        <p className=" mt-16">Already have an account ? <Link href='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}