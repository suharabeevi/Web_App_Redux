import React from "react";

const Home = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-ful h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-pink-500 font-bold p-2">Adventure is out there!</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">TO TRAVEL IS TO LIVE</h1>
                <button className="bg-pink-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
            </div>
        </div>
    )
}

export default Home;