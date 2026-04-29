import { Container } from "@/components/container";
import { JoinButton } from "@/components/join-button";
import { TwoColumnTextBlock } from "@/components/mdx/two-column-text-block";

export const metadata = {
  title: "OOWEE — новое медиа для тех, кто не просто смотрит, а делает",
  description: "Создаём пространство для тех, кто живёт единоборствами. Вне зависимости от уровня и опыта."
};

export default function AboutPage() {
  return (
    <main className="py-8 md:py-12">
      <Container>
        <div className="max-w-[1048px]">
          <h1 className="font-[family-name:var(--font-heading)] text-[18px] uppercase leading-[26px] tracking-[0.03em] text-[var(--foreground)] md:text-[32px] md:leading-[46px]">
            НОВОЕ МЕДИА ДЛЯ ТЕХ, КТО НЕ ПРОСТО СМОТРИТ, А ДЕЛАЕТ.
          </h1>

          <div className="mt-8 md:mt-12">
            <TwoColumnTextBlock
              leftTitle="зачем?"
              leftText="Мы создаём пространство для тех, кто живёт единоборствами вне зависимости от уровня. Здесь — переводы сильных материалов, истории практикующих, разговоры без пафоса."
              rightTitle="кто?"
              rightText="Такие же люди из зала. Те, кто совмещает работу с вечерними тренировками, кладёт капу в рюкзак утром и знает, что дисциплина важнее настроения."
            />
          </div>

          <div className="mt-4 text-[14px] leading-[21px] text-[var(--foreground)] md:mt-0 md:text-[16px] md:leading-6">
            <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="font-[family-name:var(--font-heading)] lowercase tracking-[0.03em] text-[var(--muted)]">
                связаться:
              </span>
              <a
                className="font-[family-name:var(--font-heading)] lowercase tracking-[0.03em] text-[#8596AA] transition-colors duration-200 hover:text-[#BEF38D]"
                href="mailto:ooweeunion@mail.ru"
              >
                ooweeunion@mail.ru
              </a>
            </p>
          </div>

          <div className="mt-8 md:mt-12">
            <JoinButton />
          </div>
        </div>
      </Container>
    </main>
  );
}
