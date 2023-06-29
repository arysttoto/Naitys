import Image from 'next/image' 

export default function Landing() {
    return (
        <>
        {/* <!-- Main Content --> */}
        <div class="flex items-center justify-center h-screen relative">
            <img src="/background.jpg" alt="Background Image" class="w-full h-full object-cover" /> 
            <div className="absolute inset-0 flex items-center justify-center mb-11"> 
                <h1 className="text-7xl font-bold text-white">Welcome to <span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-green-400">Naitys</span></h1>
            </div>
        </div>
        </>
    );
}