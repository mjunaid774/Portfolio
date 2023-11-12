import React from 'react'

const About = () => {
    return (
        <div name= "about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Passionate frontend developer with an aim to create and maintain a better code base for scalability and
                    reusability, facilitating projects from concept to launch. Passionate about learning full stack web
                    development. Eager to tackle more complex problems and continue to find ways to maximize user
                    experience.
                </p>
                <br />
                <p className='text-xl'>
                    Currently, looking for an opportunity that enables me to make use of my knowledge and abilities. I would like
                    to work in a highly competitive environment that not only make me productive but achieve high maturity level in my profession.
                </p>
            </div>
        </div>
    )
}

export default About;