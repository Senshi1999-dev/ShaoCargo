/*
  # Полное исправление RLS политик для контактных запросов

  1. Проблемы
    - Конфликтующие RLS политики
    - Неправильная настройка анонимного доступа
    - Дублирующиеся политики

  2. Решение
    - Удаление всех существующих политик
    - Создание новых корректных политик
    - Обеспечение анонимного доступа для INSERT операций

  3. Безопасность
    - Анонимные пользователи могут только создавать записи
    - Аутентифицированные пользователи могут читать все записи
    - RLS остается включенным
*/

-- Удаляем все существующие политики для таблицы contact_requests
DROP POLICY IF EXISTS "Anyone can create contact requests" ON contact_requests;
DROP POLICY IF EXISTS "Authenticated users can read contact requests" ON contact_requests;
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact_requests;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON contact_requests;
DROP POLICY IF EXISTS "Users can read own data" ON contact_requests;

-- Убеждаемся, что RLS включен
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Создаем новую политику для INSERT операций (анонимные и аутентифицированные пользователи)
CREATE POLICY "contact_requests_insert_policy" ON contact_requests
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Создаем политику для SELECT операций (только аутентифицированные пользователи)
CREATE POLICY "contact_requests_select_policy" ON contact_requests
  FOR SELECT 
  TO authenticated
  USING (true);

-- Создаем политику для UPDATE операций (только аутентифицированные пользователи)
CREATE POLICY "contact_requests_update_policy" ON contact_requests
  FOR UPDATE 
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Убеждаемся, что функция обновления updated_at существует
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Убеждаемся, что триггер существует
DROP TRIGGER IF EXISTS update_contact_requests_updated_at ON contact_requests;
CREATE TRIGGER update_contact_requests_updated_at
  BEFORE UPDATE ON contact_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();