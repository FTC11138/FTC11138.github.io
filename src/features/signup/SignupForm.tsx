import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  parentName: z.string().min(2, "Parent/Guardian name is required"),
  email: z.string().email("Please enter a valid email"),
  studentName: z.string().min(2, "Student name is required"),
  grade: z.coerce.number()
    .min(1, "Grade must be at least 1")
    .max(12, "Grade cannot be more than 12"),
  programId: z.string().min(1, "Please select a program")
});

type FormData = z.infer<typeof formSchema>;

export default function SignupForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitSuccessful } 
  } = useForm<FormData>({ 
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      parentName: '',
      email: '',
      studentName: '',
      grade: undefined,
      programId: ''
    }
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    // MVP: send to a Google Form webhook or EmailJS/Resend API
    console.log(data);
    alert("Submitted! We'll follow up by email.");
  };

  if (isSubmitSuccessful) return <p>Thanks! Check your email soon.</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <input {...register("parentName")} placeholder="Parent/Guardian Name" className="w-full border rounded p-2" />
      {errors.parentName && <p className="text-red-600 text-sm">Required</p>}
      <input {...register("email")} placeholder="Email" className="w-full border rounded p-2" />
      <input {...register("studentName")} placeholder="Student Name" className="w-full border rounded p-2" />
      <input {...register("grade", { valueAsNumber: true })} placeholder="Grade" className="w-full border rounded p-2" />
      <select {...register("programId")} className="w-full border rounded p-2">
        <option value="">Choose a program…</option>
        <option value="mic-gr4-6">Math is Cool — Grades 4–6</option>
      </select>
      <button className="bg-black text-white rounded px-4 py-2">Submit</button>
    </form>
  );
}