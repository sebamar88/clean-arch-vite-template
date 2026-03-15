import { blueprintQuery } from '@modules/blueprint/presentation/queries/blueprint-query';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Blocks, FolderTree, Waves } from 'lucide-react';
import { useIntlayer } from 'react-intlayer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function HomePage() {
  const content = useIntlayer('home-page');
  const { data: blueprintItems = [] } = useQuery(blueprintQuery);
  const principles = [
    content.principles.modularity,
    content.principles.query,
    content.principles.form,
  ];

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
                {content.badgeArchitecture}
              </Badge>
              <Badge
                className="border-accent/25 bg-accent/20 text-accent-foreground"
                variant="outline"
              >
                {content.badgeUi}
              </Badge>
            </div>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                {content.title}
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-7 md:text-lg">
                {content.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/leads-workbench">
                  {content.openWorkbench}
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#architecture-map">{content.viewBlueprint}</a>
              </Button>
            </div>
          </div>

          <Card className="border-border/60 bg-background/70 shadow-none">
            <CardHeader>
              <CardDescription>{content.stackEyebrow}</CardDescription>
              <CardTitle className="text-2xl">{content.stackTitle}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="bg-muted/60 rounded-xl border p-4">
                  <Blocks className="text-primary mb-3 size-5" />
                  <p className="font-medium">{content.uiTitle}</p>
                  <p className="text-muted-foreground text-sm">{content.uiDescription}</p>
                </div>
                <div className="bg-muted/60 rounded-xl border p-4">
                  <FolderTree className="text-primary mb-3 size-5" />
                  <p className="font-medium">{content.dddTitle}</p>
                  <p className="text-muted-foreground text-sm">{content.dddDescription}</p>
                </div>
                <div className="bg-muted/60 rounded-xl border p-4 sm:col-span-2">
                  <Waves className="text-primary mb-3 size-5" />
                  <p className="font-medium">{content.tanstackTitle}</p>
                  <p className="text-muted-foreground text-sm">{content.tanstackDescription}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-grid">
        <Card className="glass-card py-0">
          <CardHeader className="pt-6">
            <CardDescription>{content.principlesEyebrow}</CardDescription>
            <CardTitle>{content.principlesTitle}</CardTitle>
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
            <CardDescription>{content.sharedEyebrow}</CardDescription>
            <CardTitle>{content.sharedTitle}</CardTitle>
          </CardHeader>
          <CardContent className="pb-6 text-sm leading-7 md:text-base">
            <p className="text-muted-foreground">{content.sharedDescription}</p>
          </CardContent>
        </Card>
      </section>

      <section className="glass-card px-6 py-8 md:px-8" id="architecture-map">
        <div className="mb-6 space-y-2">
          <p className="text-muted-foreground text-xs font-semibold tracking-[0.22em] uppercase">
            {content.architectureEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">{content.architectureTitle}</h2>
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
