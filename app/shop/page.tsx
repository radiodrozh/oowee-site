import { Container } from "@/components/container";

export const metadata = {
  title: "Футболка Muay Thai | OOWEE Union",
  description: "Хлопок 230гр. 7 цветов. S-XXL."
};

export default function ShopPage() {
  return (
    <main className="py-8 md:py-12">
      <Container>
        <div>
          <div className="md:hidden">
            <div className="font-[family-name:var(--font-heading)] text-[16px] lowercase leading-6 tracking-[0.1em] text-[var(--muted)]">
              <p>скоро</p>
            </div>

            <div className="mt-3 aspect-square w-full overflow-hidden">
              <img
                src="/images/shop-1.jpg"
                alt="Футболка Muay Thai"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-[16px] flex flex-col gap-[12px]">
              <h1 className="font-[family-name:var(--font-heading)] text-[32px] uppercase leading-[46px] tracking-[0.03em] text-[var(--foreground)]">
                ФУТБОЛКА MUAY THAI
              </h1>

              <p className="whitespace-pre-line text-[14px] leading-[1.5] text-[var(--foreground)]">
                {"Хлопок 230гр.\n7 цветов\nS-XXL"}
              </p>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-2 md:gap-10">
            <div className="aspect-square w-full overflow-hidden">
              <img
                src="/images/shop-1.jpg"
                alt="Футболка Muay Thai"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-[36px]">
              <div className="flex w-full items-center">
                <p className="font-[family-name:var(--font-heading)] text-[16px] lowercase leading-6 tracking-[0.1em] text-[var(--muted)]">
                  скоро
                </p>
              </div>

              <h1 className="font-[family-name:var(--font-heading)] text-[32px] uppercase leading-[46px] tracking-[0.03em] text-[var(--foreground)]">
                ФУТБОЛКА MUAY THAI
              </h1>

              <p className="whitespace-pre-line text-[16px] leading-[24px] text-[var(--foreground)]">
                {"Хлопок 230гр.\n7 цветов\nS-XXL"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
