import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { phoneRegex } from "@/lib/regex";
import { useUserContext } from "@/hooks/useUserContext";

export default function UserForm() {
  const { setUser, setStep } = useUserContext();

  const formSchema = z.object({
    name: z.string().min(2, { message: "should have more than 2 chars" }),
    email: z.string().email({ message: "enter valid email address" }),
    phone: z.string().regex(phoneRegex, "Invalid Number!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function submitForm(data: z.infer<typeof formSchema>) {
    setUser(data);
    handleNext();
    console.log(data);
  }

  function handleNext() {
    setStep((p) => p + 1);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-12 dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            placeholder="enter your name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="enter your email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          )}
        </div>
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          type="number"
          placeholder="enter your phone number"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        )}
      </div>

      <Button type="submit">Next</Button>
    </form>
  );
}
