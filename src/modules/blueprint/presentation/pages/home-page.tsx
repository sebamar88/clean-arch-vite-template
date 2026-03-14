import { blueprintQuery } from '@modules/blueprint/presentation/queries/blueprint-query';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Blocks, FolderTree, Waves } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function HomePage() {
  const { t } = useTranslation();
  const { data: blueprintItems = [] } = useQuery(blueprintQuery);
  const principles = t('home.principles', { returnObjects: true }) as string[];

  return (
    <main className="page-shell">
      <section className="glass-card overflow-hidden">
        <div className="grid gap-8 px-6 py-8 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-10">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/10"
                variant="outline"
              >
                {t('home.badgeArchitecture')}
              </Badge>
              <Badge
                className="border-accent/25 bg-accent/20 text-accent-foreground"
                variant="outline"
              >
                {t('home.badgeUi')}
              </Badge>
            </div>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                {t('home.title')}
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-7 md:text-lg">
                {t('home.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/leads-workbench">
                  {t('home.openWorkbench')}
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#architecture-map">{t('home.viewBlueprint')}</a>
              </Button>
            </div>
          </div>

          <Card className="border-border/60 bg-background/70 shadow-none">
            <CardHeader>
              <CardDescription>{t('home.stackEyebrow')}</CardDescription>
              <CardTitle className="text-2xl">{t('home.stackTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="bg-muted/60 rounded-xl border p-4">
                  <Blocks className="text-primary mb-3 size-5" />
                  <p className="font-medium">{t('home.uiTitle')}</p>
                  <p className="text-muted-foreground text-sm">{t('home.uiDescription')}</p>
                </div>
                <div className="bg-muted/60 rounded-xl border p-4">
                  <FolderTree className="text-primary mb-3 size-5" />
                  <p className="font-medium">{t('home.dddTitle')}</p>
                  <p className="text-muted-foreground text-sm">{t('home.dddDescription')}</p>
                </div>
                <div className="bg-muted/60 rounded-xl border p-4 sm:col-span-2">
                  <Waves className="text-primary mb-3 size-5" />
                  <p className="font-medium">{t('home.tanstackTitle')}</p>
                  <p className="text-muted-foreground text-sm">{t('home.tanstackDescription')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-grid">
        <Card className="glass-card py-0">
          <CardHeader className="pt-6">
            <CardDescription>{t('home.principlesEyebrow')}</CardDescription>
            <CardTitle>{t('home.principlesTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            <ul className="text-muted-foreground grid gap-3 text-sm leading-6 md:text-base">
              {principles.map((principle) => (
                <li className="bg-background/65 rounded-xl border px-4 py-3" key={principle}>
                  {principle}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card border-primary/15 bg-primary/5 py-0">
          <CardHeader className="pt-6">
            <CardDescription>{t('home.sharedEyebrow')}</CardDescription>
            <CardTitle>{t('home.sharedTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="pb-6 text-sm leading-7 md:text-base">
            <p className="text-muted-foreground">{t('home.sharedDescription')}</p>
          </CardContent>
        </Card>
      </section>

      <section className="glass-card px-6 py-8 md:px-8" id="architecture-map">
        <div className="mb-6 space-y-2">
          <p className="text-muted-foreground text-xs font-semibold tracking-[0.22em] uppercase">
            {t('home.architectureEyebrow')}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">{t('home.architectureTitle')}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {blueprintItems.map((item) => (
            <Card className="bg-card/85 gap-4 py-0" key={item.id}>
              <CardHeader className="pt-6">
                <Badge className="w-fit capitalize" variant="secondary">
                  {item.layer}
                </Badge>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 pb-6">
                {item.tools.map((tool) => (
                  <Badge className="rounded-full" key={tool} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
