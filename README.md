# Character Filter — NestJS GraphQL API

PostgreSQL + Prisma + GraphQL (Apollo) ile karakter listesi; sunucu tarafında `status`, `gender` ve metin araması (`name` / `description`) filtreleri.

---

## Gereksinimler

- **Node.js** (LTS önerilir, örn. 20 veya 22)
- **PostgreSQL** (yerel veya Docker)
- **npm**

---

## Kurulum (adım adım)

### 1. Repoyu al ve bağımlılıkları kur

```bash
git clone <repo-url>
cd nest-character-filter
npm install
```

`npm install` sonunda **`postinstall`** ile otomatik **`prisma generate`** çalışır (Prisma Client üretilir).

### 2. Ortam dosyası

`.env` repoda yoktur. Örnekten kopyala:

```bash
cp .env.example .env
```

`.env` içinde **`DATABASE_URL`** değerini kendi PostgreSQL bilgilerine göre düzenle:

```env
DATABASE_URL="postgresql://KULLANICI:SIFRE@localhost:5432/Task?schema=public"
```

**CORS:** Tarayıcıdan farklı bir origin’deki frontend (ör. Next.js) bu API’ye istek atacaksa `.env` içinde izin verilen adresleri virgülle yaz:

```env
CORS_ORIGINS=https://ornek-prod.com,http://localhost:3001
```

- **`CORS_ORIGINS` tanımlı değil veya boşsa** uygulama `origin: true` kullanır (yerel denemede genelde yeterli).
- **`CORS_ORIGINS` doluysa** sadece listedeki origin’lere izin verilir (`main.ts` → `app.enableCors`).

**Not:** Veritabanı adı bu projede **`Task`** olarak kullanılmıştır (büyük/küçük harf için gerekiyorsa: `createdb "Task"`).

### 3. PostgreSQL’de veritabanını oluştur

PostgreSQL çalışır durumda olmalı. Örnek:

```bash
createdb "Task"
```

veya `psql` ile:

```sql
CREATE DATABASE "Task";
```

### 4. Veritabanı şeması (migration)

Migration dosyaları `prisma/migrations/` altında. İlk kurulumda tabloları oluşturmak için:

```bash
npx prisma migrate deploy
```

Geliştirme sırasında şema değiştirdiysen ve yeni migration üretmek istiyorsan:

```bash
npx prisma migrate dev
```

Durumu kontrol:

```bash
npx prisma migrate status
```

### 5. Örnek veri (seed)

Filtre ve arama testleri için örnek karakterleri yükler; mevcut `Character` kayıtlarını siler ve yeniden doldurur.

```bash
npm run db:seed
```

veya:

```bash
npx prisma db seed
```

### 6. Uygulamayı çalıştır

```bash
npm run start:dev
```

Varsayılan adres: **http://localhost:3000**  
GraphQL HTTP endpoint: **POST http://localhost:3000/graphql**

Portu değiştirmek için `.env` içinde `PORT` kullanılabilir (`main.ts`).

---

## GraphQL örnekleri

**Tüm karakterler:**

```graphql
query {
  characters {
    id
    name
    status
    gender
    description
    image
  }
}
```

**Filtreli:**

```graphql
query ($filter: CharacterFilterInput) {
  characters(filter: $filter) {
    id
    name
    status
    gender
  }
}
```

Variables örneği:

```json
{
  "filter": {
    "status": "ALIVE",
    "gender": "MALE",
    "search": "portal"
  }
}
```

**curl:**

```bash
curl -s -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { characters { id name status gender } }"}'
```

---

## Yararlı komutlar

| Komut | Açıklama |
|--------|-----------|
| `npm run start:dev` | Geliştirme (watch) |
| `npm run build` | Derleme (`dist/`) |
| `npm run start:prod` | Üretim (`node dist/main` öncesi `npm run build`) |
| `npm run db:seed` | Seed çalıştır |
| `npx prisma studio` | Veritabanını tarayıcıdan incele |

---

## Sorun giderme

- **`Repository not found` / push:** GitHub’da repo oluşturulmuş olmalı; `git remote -v` ile URL kontrol et.
- **`prisma migrate` advisory lock:** Takılı kalan `prisma migrate` süreçlerini kapat; Postgres’te `Task` veritabanına bağlı oturumları sonlandır.
- **Boş `characters`:** Migration uygulanmış mı ve `npm run db:seed` çalıştırıldı mı kontrol et.
- **Postman:** İstek gövdesinde GraphQL **QUERY** alanı dolu olmalı; tek endpoint `POST /graphql`.
- **Tarayıcı CORS hatası:** Frontend URL’si `CORS_ORIGINS` listesinde mi kontrol et; production’da boş bırakmak yerine gerçek domain’leri yaz.

---

## Teknolojiler

NestJS, GraphQL (Apollo), Prisma, PostgreSQL.
