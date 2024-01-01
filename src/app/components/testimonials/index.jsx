

const Testimonials = () => {
    return <div className="container px-4 mx-auto">
    <div className="max-w-lg mx-auto mb-12 text-center">
      <img className="mx-auto" src="metis-assets/icons/quote.svg" alt=""/>
      <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">What Users Say
</h2>
      <p className="text-blueGray-400 leading-loose">People are loving it. So will you</p>
    </div>
    <div className="flex flex-wrap justify-center mb-6">
      
      <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
        <div className="p-8 bg-white shadow rounded">
          <div className="flex items-center mb-4">
            <img className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt=""/>
            <div className="pl-4">
              <p className="text-xl">Julie Brown</p>
              <p className="text-blue-600">Head of Development</p>
            </div>
          </div>
          <p className="text-blueGray-400 leading-loose">This is actually the first tool that i managed to use to get a way to visualise my code.</p>
        </div>
      </div>
      
      
      
      <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
        <div className="p-8 bg-white shadow rounded">
          <div className="flex items-center mb-4">
            <img className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt=""/>
            <div className="pl-4">
              <p className="text-xl">Shobu</p>
              <p className="text-blue-600">Indie Hacker</p>
            </div>
          </div>
          <p className="text-blueGray-400 leading-loose">This tool has been a game-changer for understanding complex code structures!</p>
        </div>
      </div>
    </div>
  </div>
}

export default Testimonials