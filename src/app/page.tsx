const LoginForm = () => {
  return (
    <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
      <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
        <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
          <h1 className="text-center text-black font-light text-3xl bg-brown rounded-t-xl m-0 py-4">Sign In</h1>
          <form action="" className="p-6">
            <input type="text" name="" placeholder="Username" className="py-2 px-3 w-full text-black text-lg font-light outline-none"/>
            <input type="text" name="" placeholder="Password" className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"/>
            <div className="flex mt-5 justify-between items-center">
              <a href="/sign-up" className="text-white cursor-pointer transition hover:text-black">Register</a>
              <button type="submit" className="bg-yellow text-black font-medium py-2 px-8 transition hover:text-white">Submit</button>
            </div>
          </form>
        </aside>
      </div>
    </main>
  )

}

export default LoginForm;
