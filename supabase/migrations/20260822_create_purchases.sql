create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  stripe_session_id text not null unique,
  stripe_payment_intent_id text,
  stripe_event_id text,
  user_id text not null,
  prompt_id text not null,
  amount integer not null check (amount >= 0),
  currency text not null default 'usd',
  status text not null check (status in ('paid', 'pending', 'failed', 'expired', 'refunded')),
  last_event_type text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists purchases_user_id_idx on public.purchases (user_id);
create index if not exists purchases_status_idx on public.purchases (status);
create index if not exists purchases_payment_intent_idx on public.purchases (stripe_payment_intent_id);

create or replace function public.set_purchases_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists purchases_set_updated_at on public.purchases;
create trigger purchases_set_updated_at
before update on public.purchases
for each row execute function public.set_purchases_updated_at();

alter table public.purchases enable row level security;
