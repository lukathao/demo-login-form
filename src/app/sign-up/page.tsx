"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { UserInfo } from "../models/user.model";
import Notify, { showToast } from "@/components/notify";

const SignUp = () => {
    const {register, handleSubmit, reset} = useForm<UserInfo>();

    const onSubmit = async (data: UserInfo) => {
        try {
            const endpoint = `${process.env.NEXT_PUBLIC_API_PATH}`;
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };

            const res: any = await fetch(endpoint, options);
            const regMsg = await res.json();

            if (res.status == 202) {
                showToast(regMsg, "success");
                reset();
            } else {
                showToast(regMsg, "error");
            }

        } catch(error:any) {
            showToast(error, "error");
        }
    }

    return (
        <>
            <Notify />
            <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
            <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
                <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
                <h1 className="text-center text-black font-light text-3xl bg-brown rounded-t-xl m-0 py-4">Register</h1>
                <form action="" className="p-6">
                    <input 
                        {...register("username", {required: true})}
                        type="text" 
                        name="username" 
                        placeholder="username" 
                        className="py-2 px-3 w-full text-black text-lg font-light outline-none" />
                        
                    <input 
                        {...register("email", {required: true})}
                        type="email" 
                        name="" 
                        placeholder="Email" 
                        className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"/>
                        
                    <input 
                        {...register("password", {required: true})}
                        type="password" 
                        name="" 
                        placeholder="Password" 
                        className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"/>
                        
                    <input 
                        {...register("confirmPassword", {required: true})}
                        type="password" 
                        name="" 
                        placeholder="Confirm Password" 
                        className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"/>
                    <div className="flex mt-5 justify-between items-center">
                        <Link href="/" className="text-white cursor-pointer transition hover:text-black">Already Registered?</Link>
                        <button type="submit" onClick={handleSubmit(onSubmit)} className="bg-yellow text-black font-medium py-2 px-8 transition hover:text-white">Submit</button>
                    </div>
                </form>
                </aside>
            </div>
            </main>
        </>
    )
}

export default SignUp;
