create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  message text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  created_at timestamptz default now()
);

alter table public.feedback enable row level security;

drop policy if exists "Anyone can read feedback" on public.feedback;
create policy "Anyone can read feedback" on public.feedback
  for select using (true);

drop policy if exists "Anyone can insert feedback" on public.feedback;
create policy "Anyone can insert feedback" on public.feedback
  for insert with check (true);
