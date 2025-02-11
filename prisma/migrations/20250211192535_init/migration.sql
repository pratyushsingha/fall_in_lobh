-- CreateTable
CREATE TABLE "website" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "gif_url" TEXT NOT NULL DEFAULT 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDZ3eWNqemdvMmdsamFvajZmb3l2azd6Zzl0ZHM3eGE0MTB3cDYxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xFyn0emm4qvvAA/giphy.gif',
    "yesBtnClickTxt" TEXT NOT NULL,
    "yesBtnTxt" TEXT NOT NULL,
    "subtitle" TEXT,
    "noBtnPhrases" TEXT[],
    "webUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "website_pkey" PRIMARY KEY ("id")
);
