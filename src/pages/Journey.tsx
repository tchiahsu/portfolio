import { journey } from "../data/journey"
import Event from "../components/ui/Event"
import Title from "../components/ui/Title"


export default function Journey() {
  return (
    <div className="mb-20 mt-15">
      <Title title="My Journey" />
      <div className="flex flex-col gap-2 mt-8 text-gray-600">
        {journey.map((item) => (
          <Event 
            year={item.year}
            month={item.month}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
