import React,{memo} from 'react'

const GetStarted = () => {
  return (
    <div className="flex flex-col text-white ">
                    <div className="mt- rounded-xl bg-artyclicOceanBlue align-middle flex-col p-4">
                        <div className="m-2 justify-center text-xl">
                            <h1 className="text-center p-4 font-sans">
                                Get Started with Koinx for FREE
                            </h1>
                        </div>
                        <div className="px-4">
                            <p className="text-center text-sm">
                                With our range of features that you can equip for free, KoinX
                                allows you to be more educated and aware of your tax reports,
                            </p>
                        </div>
                        <div className="flex justify-center align-middle m-5 mt-5">
                            <img
                                src="/image.png"
                                alt=""
                            />
                        </div>
                        <div className="flex align-middle justify-center">
                            <button
                                className="bg-white hover:bg-gray-100 text-gray-800 font-bold p-3 px-10 rounded-lg border border-gray-300 mb-4"
                                // onClick={scrollToTop}
                            >
                                Get Started for FREE →
                            </button>
                        </div>
                    </div>
                </div>
  )
}

export default memo(GetStarted)
