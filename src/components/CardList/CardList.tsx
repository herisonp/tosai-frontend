import { getServices } from "@/services/getServices";
import { Card } from "../Card/Card";
import "./CardList.css";

export async function CardList({ search }: { search?: string }) {
  const { data, error } = await getServices();
  if (!data || error) {
    <div>Não foi possível carregar os serviços...</div>;
  }
  const services = !search
    ? data
    : data?.filter(
        (service) =>
          service.title.toLowerCase().includes(search.toLowerCase()) ||
          service.description.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <ul className="card-list">
      {services &&
        services.map((service) => <Card key={service.id} card={service} />)}
    </ul>
  );
}
