-- CreateEnum
CREATE TYPE "CharacterStatus" AS ENUM ('ALIVE', 'DEAD', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "CharacterGender" AS ENUM ('MALE', 'FEMALE', 'UNKNOWN');

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "CharacterStatus" NOT NULL,
    "gender" "CharacterGender" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);
