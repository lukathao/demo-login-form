"use client";

import { useForm } from "react-hook-form";
import { UserLogin } from "./models/user.model";
import Notify, { showToast } from "@/components/notify";

const LoginForm = () => {
    const {register, handleSubmit, reset} = useForm<UserLogin>();

    const onSubmit = async (data: UserLogin) => {
      try {
        const endpoint = `${process.env.NEXT_PUBLIC_API_PATH}user/login`;
        const option = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

        const res = await fetch(endpoint, option);
        const logMsg = await res.json();

        if (res.status == 200) {
          showToast(logMsg.msg, "success");
          reset();
        } else {
          showToast(logMsg, "error");
        }
      } catch (e: any) {
        showToast(e, "error");
      }
    }
    return (
    <>
      <Notify />
      <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
        <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
          <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
            <h1 className="text-center text-black font-light text-3xl bg-brown rounded-t-xl m-0 py-4">Sign In</h1>
            <form action="" className="p-6">
              <input 
                {...register("email", {required:true})}
                type="text" 
                name="" 
                placeholder="Username" 
                className="py-2 px-3 w-full text-black text-lg font-light outline-none"/>
              <input 
                {...register("password", {required:true})}
                type="password" 
                name="" 
                placeholder="Password" 
                className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"/>
              <div className="flex mt-5 justify-between items-center">
                <a href="/sign-up" className="text-white cursor-pointer transition hover:text-black">Register</a>
                <button type="submit" onClick={handleSubmit(onSubmit)} className="bg-yellow text-black font-medium py-2 px-8 transition hover:text-white">Submit</button>
              </div>
            </form>
          </aside>
        </div>
      </main>
    </>
  )

}

export default LoginForm;
