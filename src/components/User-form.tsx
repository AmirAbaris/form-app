import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function UserForm() {
  return (
    <section className="space-y-12 dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" placeholder="enter your name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="enter your email" />
        </div>
      </div>
      <div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="number" placeholder="enter your phone number" />
        </div>
      </div>
    </section>
  );
}
