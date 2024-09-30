"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  title: string;
  description?: string;
  sku?: string;
  price: string | number;
  currency: string;
  image: string;
  images?: string[];
}

export default function ProductCard({
  id,
  title,
  description,
  sku,
  price,
  currency,
  image,
  images,
  addToCart,
}: ProductCardProps) {
  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle className="flex items-center justify-center min-h-[4rem]:">
          {title}
        </CardTitle>
        <CardDescription className="relative w-full h-60">
          <Image
            src={image}
            fill
            sizes="100%"
            alt={title}
            className="object-contain"
          />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <p className="min-h-[6rem]">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          <p>Price</p>
          <p>{price}</p>
        </div>
        <Button
          size={"lg"}
          variant={"default"}
          onClick={() => console.log("oi")}
        >
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}
