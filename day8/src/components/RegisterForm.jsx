import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// 1. Define the validation schema using Zod
const signUpSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // Sets the error specifically on this field
});

// 2. Infer the TypeScript type from the Zod schema

export default function RegisterForm() {
  // 3. Initialize useForm with the zodResolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  });

  // 4. Handle form submission
  const onSubmit = async (data) => {
    // Data is automatically typed and validated at this point
    console.log('Valid Form Data submitted:', data);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Username Field */}
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" {...register('username')} />
        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email')} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password')} />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>

      {/* Confirm Password Field */}
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Sign Up'}
      </button>
    </form>
  );
}


// 🔑 Key Concepts Explained
// • zodResolver(schema): Acts as the bridge.It forwards the form data to Zod on evaluation, intercepts any validation errors, and maps them cleanly into React Hook Form’s internal errors object.
// • Uncontrolled Performance: Because React Hook Form utilizes refs via the register function, typing inside the fields will not cause global component re - renders.Validation runs dynamically based on the form configuration(e.g., on submission or when blurring fields).
// • .refine(): Ideal for cross - field validations, such as checking if two password fields match, or making one input dependent on the value of another.


// What we've learnt today?

// React Hook Form
// lucide react for icons
// tailwindcss for styling
// zod
// Validation with zod
// Form submit

// write all the code 4 times, meaning, you need to practice.
// That much for today! 
// Have a good day!   