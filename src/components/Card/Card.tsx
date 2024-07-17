import Image from "next/image";
import Link from "next/link";

import { Services } from "@/types/Services";

import { limitedChar } from "@/utils/limitedChar";

import "./Card.css";

export function Card({ card }: { card: Services }) {
  const { WHATSAPP_PHONE } = process.env;
  const message = `[ SIMULAÇÃO ]%0AVim do site Tosaí. Quero saber mais sobre o serviço ${card.title}.`;
  const whatsAppLink = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
  return (
    <li className="card">
      <Link className="card__link" href={whatsAppLink} target="_blank">
        <div className="card__image-container">
          <Image
            className="card__image"
            src={card.image}
            alt={card.title}
            quality={50}
            width={500}
            height={190}
          />
        </div>
        <div className="card__info">
          <h2 className="card__title">{limitedChar(card.title, 21)}</h2>
          <p className="card__description">
            {limitedChar(card.description, 65)}
          </p>
          <div className="card__price-group">
            <span className="card__price">R$ {card.current_price},00</span>
            {card.full_price !== card.current_price && (
              <span className="card__full-price">R$ {card.full_price},00</span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}
