import { getServices } from "@/services/getServices";
import { Card } from "../Card/Card";
import "./CardList.css";

export async function CardList() {
  const { data: services, error } = await getServices();
  if (error) {
    <div>Não foi possível carregar os serviços...</div>;
  }
  return (
    <ul className="card-list">
      {services &&
        services.map((service) => <Card key={service.id} card={service} />)}
    </ul>
  );
}
