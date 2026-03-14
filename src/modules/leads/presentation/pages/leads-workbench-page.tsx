import { LeadCaptureForm } from '@modules/leads/presentation/components/lead-capture-form';
import { leadsQuery } from '@modules/leads/presentation/queries/leads-query';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ChevronLeft, DatabaseZap, PencilLine } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function LeadsWorkbenchPage() {
  const { t } = useTranslation();
  const { data: leads = [] } = useQuery(leadsQuery);

  return (
    <main className="page-shell">
      <section className="glass-card overflow-hidden">
        <div className="grid gap-6 px-6 py-8 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <Badge className="w-fit" variant="outline">
              {t('leads.badge')}
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                {t('leads.title')}
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-7">
                {t('leads.description')}
              </p>
            </div>
            <Button asChild size="lg" variant="outline">
              <Link to="/">
                <ChevronLeft />
                {t('leads.back')}
              </Link>
            </Button>
          </div>

          <div className="grid gap-4">
            <Card className="border-border/70 bg-background/75 py-0 shadow-none">
              <CardHeader className="pt-6">
                <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-full">
                  <PencilLine className="size-5" />
                </div>
                <CardTitle>{t('leads.formFeatureTitle')}</CardTitle>
                <CardDescription>{t('leads.formFeatureDescription')}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/70 bg-background/75 py-0 shadow-none">
              <CardHeader className="pt-6">
                <div className="bg-accent/25 text-accent-foreground flex size-10 items-center justify-center rounded-full">
                  <DatabaseZap className="size-5" />
                </div>
                <CardTitle>{t('leads.queryFeatureTitle')}</CardTitle>
                <CardDescription>{t('leads.queryFeatureDescription')}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-grid">
        <Card className="glass-card py-0">
          <CardHeader className="pt-6">
            <CardDescription>{t('leads.formEyebrow')}</CardDescription>
            <CardTitle>{t('leads.formTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            <LeadCaptureForm />
          </CardContent>
        </Card>

        <Card className="glass-card py-0">
          <CardHeader className="pt-6">
            <CardDescription>{t('leads.queryEyebrow')}</CardDescription>
            <CardTitle>{t('leads.queryTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 pb-6">
            {leads.length === 0 ? (
              <div className="text-muted-foreground rounded-2xl border border-dashed px-4 py-10 text-center text-sm">
                {t('leads.emptyState')}
              </div>
            ) : (
              leads.map((lead) => (
                <Card className="bg-background/80 gap-4 py-0" key={lead.id}>
                  <CardHeader className="pt-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{lead.company}</CardTitle>
                        <CardDescription>{lead.contactEmail}</CardDescription>
                      </div>
                      <Badge variant="secondary">
                        {lead.expectedUsers} {t('leads.form.usersSuffix')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-5">
                    <p className="text-muted-foreground text-sm leading-6">{lead.challenge}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
