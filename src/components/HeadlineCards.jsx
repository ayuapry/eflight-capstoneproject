import React from 'react'

export const HeadlineCards = () => {
  return (
    <div className='h-[500px] md:mt-10'>
        <section className="md:h-full flex items-center text-gray-600 md:mx-16 ">
        <div className="container px-5 py-24 mx-3">
            <p className='text-xl mb-3'>Promotions</p>
            <div className="flex flex-wrap -m-4">
                <div className="p-4 sm:w-1/2 lg:w-1/4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-40 w-full object-cover object-center"
                            src="https://picsum.photos/id/188/720/400" alt="blog" />
                        <div className="p-6 hover:bg-gray-200 hover:text-black transition duration-300 ease-in">
                            <h1 className="text-2xl font-semibold mb-3">Lorem, ipsum dolor.</h1>
                            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque in odit voluptatum quasi. Aut.</p>
                        </div>
                    </div>
                </div>
                
                <div className="p-4 sm:w-1/2 lg:w-1/4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-40 w-full object-cover object-center"
                            src="https://picsum.photos/id/1016/720/400" alt="blog" />
                        <div className="p-6 hover:bg-gray-200 hover:text-black transition duration-300 ease-in">
                            <h1 className="text-2xl font-semibold mb-3">Lorem, ipsum.</h1>
                            <p className="leading-relaxed mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vitae ad praesentium inventore cumque? Nemo.</p>
                        </div>
                    </div>
                </div>
               
                <div className="p-4 sm:w-1/2 lg:w-1/4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-40 w-full object-cover object-center"
                            src="https://picsum.photos/id/11/367/267" alt="blog" />
                        <div className="p-6 hover:bg-gray-200 hover:text-black transition duration-300 ease-in">
                            <h1 className="text-2xl font-semibold mb-3">Lorem, ipsum dolor.</h1>
                            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus et nihil sed dolor praesentium doloribus.</p>                         
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-40 w-full object-cover object-center"
                            src="https://picsum.photos/id/11/367/267" alt="blog" />
                        <div className="p-6 hover:bg-gray-200 hover:text-black transition duration-300 ease-in">
                            <h1 className="text-2xl font-semibold mb-3">Lorem, ipsum dolor.</h1>
                            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus et nihil sed dolor praesentium doloribus.</p>                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}
