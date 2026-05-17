-- CreateIndex
CREATE INDEX "Character_status_idx" ON "Character"("status");

-- CreateIndex
CREATE INDEX "Character_gender_idx" ON "Character"("gender");

-- Metin araması (ILIKE / contains): pg_trgm + GIN — substring için btree yerine
CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX "Character_name_trgm_idx" ON "Character" USING gin ("name" gin_trgm_ops);

CREATE INDEX "Character_description_trgm_idx" ON "Character" USING gin ("description" gin_trgm_ops);
