
const Home = () => {
    return (
        <div className="flex flex-col justify-end items-center min-height ">
            <div className="">
                <h1 className='text-5xl font-bold text-[#111111] text-center'>Welcome to <span
                    className="font-bold bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient"
                >
                    ByteBlaze
                </span></h1>
                <p className="text-[#111111] w-[32rem] text-center mt-8 mb-8">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
                <div className="flex justify-center gap-4">
                    <a href="#_" className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-secondary rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
                            <span className="relative">Button Text</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>

                    <a href="#_" className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-secondary rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
                            <span className="relative">Button Text</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>
                </div>
            </div>
            <img className="w-full" src={`https://byte-blaze.netlify.app/assets/wave-DprG_XZY.svg`} alt="" />
        </div>
    );
};

export default Home;