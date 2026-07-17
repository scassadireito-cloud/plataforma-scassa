-- SCRIPT DE INICIALIZAÇÃO DO BANCO DE DADOS SCASSA DIREITO

-- TABELA DE PERFIS (ALUNOS)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  xp_points integer default 0,
  tier text default 'premium',
  avatar_url text,
  created_at timestamp with time zone default current_timestamp
);

-- TABELA DE CURSOS
create table public.courses (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  category text,
  image_url text,
  created_at timestamp with time zone default current_timestamp
);

-- TABELA DE LIÇÕES (AULAS)
create table public.lessons (
  id uuid primary key default uuid_generate_v4(),
  course_id uuid references public.courses(id) on delete cascade,
  title text not null,
  video_url text,
  content_markdown text,
  order_index int,
  created_at timestamp with time zone default current_timestamp
);

-- TABELA DE QUESTÕES (BANCO DE DADOS INTELIGENTE)
create table public.questions (
  id uuid primary key default uuid_generate_v4(),
  lesson_id uuid references public.lessons(id) on delete cascade,
  statement text not null,
  option_a text,
  option_b text,
  option_c text,
  option_d text,
  correct_option char(1),
  explanation_ai text,
  difficulty text default 'media',
  created_at timestamp with time zone default current_timestamp
);

-- TABELA DE RESPOSTAS DOS ALUNOS
create table public.student_answers (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  question_id uuid references public.questions(id) on delete cascade,
  selected_option char(1),
  is_correct boolean,
  time_spent_seconds int,
  created_at timestamp with time zone default current_timestamp
);

-- TABELA DE PROGRESSO DE ALUNOS
create table public.student_progress (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  course_id uuid references public.courses(id) on delete cascade,
  lessons_completed int default 0,
  total_lessons int,
  progress_percentage numeric default 0,
  last_accessed timestamp with time zone,
  created_at timestamp with time zone default current_timestamp
);

-- SEED DATA: Exemplo de Disciplina
INSERT INTO public.courses (title, description, category, image_url) VALUES
('Direito Constitucional', 'Dominar os Direitos Fundamentais e Controle de Constitucionalidade', 'Penal', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80');

-- SEED DATA: Exemplo de Aula
INSERT INTO public.lessons (course_id, title, video_url, content_markdown, order_index) 
SELECT id, 'Introdução aos Direitos Fundamentais', 'https://www.youtube.com/embed/dQw4w9WgXcQ', '# Direitos Fundamentais\n\nOs direitos fundamentais são aqueles reconhecidos como essenciais à dignidade da pessoa humana.', 1
FROM public.courses WHERE title = 'Direito Constitucional';
