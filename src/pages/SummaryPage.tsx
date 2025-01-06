import SummaryItem from "@/components/SummaryItem";
import { useUserContext } from "@/hooks/useUserContext";

export default function SummaryPage() {
  const { user, address } = useUserContext();

  if (!user || !address) {
    return (
      <p className="text-center text-xl">
        No data to display. Please complete the form steps.
      </p>
    );
  }

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-2xl font-bold text-center">Summary</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SummaryItem
          props={{
            emoji: "👤",
            title: "Name",
            value: user.name,
          }}
        />
        <SummaryItem
          props={{
            emoji: "📧",
            title: "Email",
            value: user.email,
          }}
        />
        <SummaryItem
          props={{
            emoji: "📞",
            title: "Phone",
            value: user.phone,
          }}
        />
        <SummaryItem
          props={{
            emoji: "🏠",
            title: "First Address",
            value: address.firstAddress,
          }}
        />
        <SummaryItem
          props={{
            emoji: "🏢",
            title: "Second Address",
            value: address.secondAddress,
          }}
        />
        <SummaryItem
          props={{
            emoji: "🏙️",
            title: "City",
            value: address.city,
          }}
        />
        <SummaryItem
          props={{
            emoji: "📮",
            title: "Postal Code",
            value: address.postalCode,
          }}
        />
      </div>
    </div>
  );
}
