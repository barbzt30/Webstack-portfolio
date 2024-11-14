import Link from "next/link"

export default function Signup () {
    return (
        <div>
            <div 
            className=" bg-[url('@/public/night_bg.png')] bg-cover bg-center h-screen w-full flex justify-center items-center"
            >
                <div className=" bg-[url('@/public/night_bg.png')] bg-cover bg-center border text-white h-[35rem] w-72 rounded-xl p-3 text-center flex justify-center items-center">
                    <div>
                        <p className="font-serif font-bold text-2xl">Sign Up</p>
                        <p className=" pt-1 font-serif">Sign up to experience accurate weather forecasts at your fingertips!</p>
                        <form action="" className="mt-7">
                            <input type="text" name="first_name" id="signup_first_name" placeholder="First Name" className=" rounded-xl pl-2" />
                            <br />
                            <input type="text" name="last_name" id="signup_last_name" placeholder="Last Name" className=" mt-4 rounded-xl pl-2" />
                            <br />
                            <input type="email" name="email" id="signup_email" placeholder="Email" className=" mt-4 rounded-xl pl-2" />
                            <br />
                            <input type="password" name="password" id="signup_password" placeholder="Password" className=" mt-4 rounded-xl pl-2" />
                            <br />
                            <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 w-20 rounded-full mt-10">Sign up</button>
                        </form>
                        <p className=" mt-16 text-black font-black text-sm">Already have an account ? <Link href='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}