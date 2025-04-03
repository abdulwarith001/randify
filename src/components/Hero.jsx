import React from "react"

const Hero = ()=>{
    return(
        <hero className="text-center">
            <h1 className="text-black-500 mt-16 text-6xl font-normal">Don't know what to</h1>
            <h1 className="text-black-500 mt-3 text-6xl font-normal">Play?</h1>

            <h1 className="text-black-500 mt-6 text-xl font-light">Use Randify to listen to Random music you would love!</h1>

            <button className="text-white bg-green-500 mt-16 flex justify-self-center items-center gap-2 text-l p-2 rounded-md pr-4 pl-4">Play a random song <i class="fa-brands fa-spotify"></i></button>

            <a href="#" className="text-black-500 mt-6 flex justify-self-center text-xl">Customize</a>
        </hero>
        )
}

export default Hero