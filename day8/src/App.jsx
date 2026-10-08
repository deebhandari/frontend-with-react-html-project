import { Eye, EyeClosed } from "lucide-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useForm } from "react-hook-form"
import { useState } from "react";
import RegisterForm from "./components/RegisterForm";

function App() {

  // state variable

  const [passwordVisible, setPasswordVisible] = useState(true);

  // let showPassword = true;
  // function hidePassword() {
  //   showPassword = false
  // }

  // passwordVisible is getter, and setPasswordVisible is setter

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(watch("example")) // watch input value by passing its name

  return <>
    <Header />
    <main className="min-h-screen flex justify-center bg-gray-100">
      <div className="form-wrapper max-w-2xl my-10 rounded-2xl p-5 shadow-xl bg-white w-full ">
        <h3 className="text-3xl mb-5">Register Now</h3>
        {/* <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="Enter your full name" {...register("fullName", { minLength: 2 })} />
            {errors.fullName && <span className="text-red-500">Fix issues</span>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" {...register("email", { required: true })} />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <div className="flex relative">
              <input type={passwordVisible ? "password" : "text"} placeholder="Set your password" {...register("password", { minLength: 8 })} />
              <div onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-3 top-3 bg-gray-200 cursor-pointer p-2 rounded-full" >
                {passwordVisible ? <Eye /> : <EyeClosed />}
              </div>
            </div>
            {errors.password && <span className="text-red-500">Fix issues in Password</span>}
          </div>

          <input type="submit" />
        </form> */}

        <RegisterForm />
      </div>
    </main>
    <Footer />
  </>
}
export default App;