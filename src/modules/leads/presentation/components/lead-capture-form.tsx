import { useCreateLead } from '@modules/leads/presentation/mutations/use-create-lead';
import { leadSchema } from '@modules/leads/presentation/schemas/lead-schema';
import type { LeadFormValues } from '@modules/leads/presentation/types/lead-form-values';
import { readFieldError } from '@shared/utils/read-field-error';
import { useForm } from '@tanstack/react-form';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const defaultValues: LeadFormValues = {
  company: '',
  contactEmail: '',
  expectedUsers: 10,
  challenge: '',
};

export function LeadCaptureForm() {
  const { t } = useTranslation();
  const createLead = useCreateLead();

  const form = useForm({
    defaultValues,
    validators: {
      onChange: leadSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      await createLead.mutateAsync(value);
      formApi.reset();
    },
  });

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        void form.handleSubmit();
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <form.Field name="company">
          {(field) => {
            const error = readFieldError(field.state.meta.errors[0]);

            return (
              <label className="grid gap-2" htmlFor={field.name}>
                <span className="text-sm font-medium">{t('leads.form.company')}</span>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder={t('leads.form.companyPlaceholder')}
                />
                {error ? <small className="text-destructive text-sm">{error}</small> : null}
              </label>
            );
          }}
        </form.Field>

        <form.Field name="contactEmail">
          {(field) => {
            const error = readFieldError(field.state.meta.errors[0]);

            return (
              <label className="grid gap-2" htmlFor={field.name}>
                <span className="text-sm font-medium">{t('leads.form.email')}</span>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder={t('leads.form.emailPlaceholder')}
                />
                {error ? <small className="text-destructive text-sm">{error}</small> : null}
              </label>
            );
          }}
        </form.Field>
      </div>

      <form.Field name="expectedUsers">
        {(field) => {
          const error = readFieldError(field.state.meta.errors[0]);

          return (
            <label className="grid gap-2" htmlFor={field.name}>
              <span className="text-sm font-medium">{t('leads.form.expectedUsers')}</span>
              <Input
                id={field.name}
                name={field.name}
                type="number"
                min={1}
                step={1}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.valueAsNumber)}
              />
              {error ? <small className="text-destructive text-sm">{error}</small> : null}
            </label>
          );
        }}
      </form.Field>

      <form.Field name="challenge">
        {(field) => {
          const error = readFieldError(field.state.meta.errors[0]);

          return (
            <label className="grid gap-2" htmlFor={field.name}>
              <span className="text-sm font-medium">{t('leads.form.challenge')}</span>
              <Textarea
                id={field.name}
                name={field.name}
                rows={5}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                placeholder={t('leads.form.challengePlaceholder')}
              />
              {error ? <small className="text-destructive text-sm">{error}</small> : null}
            </label>
          );
        }}
      </form.Field>

      <div className="flex flex-wrap items-center gap-3">
        <Button disabled={createLead.isPending} type="submit">
          {createLead.isPending ? t('leads.form.saving') : t('leads.form.submit')}
        </Button>
        {createLead.isSuccess ? (
          <p className="text-muted-foreground text-sm">{t('leads.form.success')}</p>
        ) : null}
      </div>
    </form>
  );
}
