import React from "react";
const Header = ()=>{
    return (
        <header className="flex items-center justify-between shadow pb-4">
        <h1 className="text-black-500 text-xxl ml-6 mt-4 text-3xl font-semibold">Randify</h1>

        <a href="#" className="text-white text-sm mr-6 mt-4 font-normal bg-green-500 p-2 rounded-md">Login with Spotify <i class="fa-brands fa-spotify"></i></a>
    </header>
    )
}

export default Header