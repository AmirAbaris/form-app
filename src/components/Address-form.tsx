import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddressForm() {
  const formSchema = z.object({
    firstAddress: z
      .string()
      .min(8, { message: "should have more than 8 chars" }),
    secondAddress: z
      .string()
      .min(8, { message: "should have more than 8 chars" }),
    city: z.string().min(3, { message: "should have more than 3 chars" }),
    postalCode: z.string().min(6, { message: "should have more than 6 chars" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function submitForm(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-12 dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstAddress">Address one</Label>
          <Input
            type="text"
            placeholder="enter your first address"
            {...register("firstAddress")}
          />
          {errors.firstAddress && (
            <p className="text-red-500 text-sm">
              {errors.firstAddress?.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="secondAddress">Address two</Label>
          <Input
            type="text"
            placeholder="enter your second address"
            {...register("secondAddress")}
          />
          {errors.secondAddress && (
            <p className="text-red-500 text-sm">
              {errors.secondAddress?.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            type="text"
            placeholder="enter your city name"
            {...register("city")}
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city?.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input
            type="number"
            placeholder="enter your postal code"
            {...register("postalCode")}
          />
          {errors.postalCode && (
            <p className="text-red-500 text-sm">{errors.postalCode?.message}</p>
          )}
        </div>
      </div>
      <div className="flex gap-x-2">
        <Button type="submit" variant="outline">
          Back
        </Button>
        <Button>Next</Button>
      </div>
    </form>
  );
}
