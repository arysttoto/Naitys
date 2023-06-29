export default function Navbar() {
    return (
        <>
        {/* <!-- Navbar --> */}
        <nav class="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
              <img src="favicon.ico" class="h-8 mr-3" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Naitys</span>
          </a> 
          <div class="flex md:order-2">
            <a href="/play" class="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600  group-hover:mb-10 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Play!</span> 
            </a>
          </div>
          </div>
        </nav>
        </>
    ); 
}