/*
  Warnings:

  - Added the required column `userTitle` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "userTitle" TEXT NOT NULL;
