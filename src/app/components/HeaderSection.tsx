"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"


const HeaderSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">

                    <h1 className="text-white font-extrabold text-4xl mb-5 sm:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-300 ">{`Hello, I'm `} </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Katherine',
                                1000,
                                'Mobile Developer',
                                1000,
                                'Web Developer',
                                1000,
                                'Sound Designer',
                                1000,
                          
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        /></h1>
                    <p className=" text-gray-400 text-base lg:text-x l mb-6 sm:text-lg">
                        I am a Peruvian currently based in Argentina. I like art and technology.
                    </p>
                    <div>
                        <button className="px-6 w-full lg:w-fit  py-3 rounded-full lg:mr-4 mr-0 bg-white border text-black hover:bg-transparent hover:text-slate-200 transition duration-300">Let's connect</button>
                        <button className="px-6 transition ease-in-out w-full lg:w-fit py-3 duration-300 rounded-full border hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-green-500 hover:text-black/50 hover:to-yellow-300 hover:shadow-slate-800 mt-3 delay-150 lg:mt-0">Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">

                        <Image src='/profilePic/foto.png'
                            alt="My photo"
                            width={300}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection