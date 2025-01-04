import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function AddressForm() {
  return (
    <div className="space-y-12 dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="address">Address one</Label>
          <Input type="text" placeholder="enter your first address" />
        </div>
        <div>
          <Label htmlFor="address">Address two</Label>
          <Input type="text" placeholder="enter your second address" />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input type="text" placeholder="enter your city name" />
        </div>
        <div>
          <Label htmlFor="postal">Postal Code</Label>
          <Input type="number" placeholder="enter your postal code" />
        </div>
      </div>
      <div className="flex gap-x-2">
        <Button variant="outline">Back</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
}
