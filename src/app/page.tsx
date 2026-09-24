import {
  ChannelsSection,
  ContestSection,
  HeroSection,
  IntroSection,
  NewsSection,
  SchoolStatsSection,
  SiteFooter,
  SiteHeader,
} from '@/modules/site';

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-x-clip bg-page">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <IntroSection />
        <SchoolStatsSection />
        <ContestSection />
        <NewsSection />
        <ChannelsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
