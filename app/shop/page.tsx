import { Container } from "@/components/container";

export const metadata = {
  title: "Shop | OOWEE Union",
  description: "Shop page placeholder."
};

export default function ShopPage() {
  return (
    <main className="py-8 md:py-12">
      <Container>
        <h1 className="font-[family-name:var(--font-heading)] text-[18px] uppercase leading-[1.45] tracking-[0.03em] md:text-[32px] md:leading-[1.44]">
          магазин
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          Базовый шаблон страницы готов. Карточки товаров и финальная верстка пока не добавлялись.
        </p>
      </Container>
    </main>
  );
}
