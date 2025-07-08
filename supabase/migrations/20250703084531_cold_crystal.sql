/*
  # Создание таблицы для контактных запросов

  1. Новые таблицы
    - `contact_requests`
      - `id` (uuid, первичный ключ)
      - `name` (text, имя клиента)
      - `email` (text, email клиента)
      - `phone` (text, телефон клиента)
      - `message` (text, сообщение)
      - `created_at` (timestamp, дата создания)
      - `updated_at` (timestamp, дата обновления)

  2. Безопасность
    - Включить RLS для таблицы `contact_requests`
    - Добавить политику для анонимных пользователей на создание записей
    - Добавить политику для аутентифицированных пользователей на чтение записей
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Политика для создания записей анонимными пользователями
CREATE POLICY "Anyone can create contact requests"
  ON contact_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Политика для чтения записей аутентифицированными пользователями
CREATE POLICY "Authenticated users can read contact requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Функция для автоматического обновления updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Триггер для автоматического обновления updated_at
CREATE TRIGGER update_contact_requests_updated_at
  BEFORE UPDATE ON contact_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();