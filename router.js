import express from "express";

let cars = [
  {
    id: 1,
    title: "1Mitsubishi Lancer X",
    cost: 10000,
    picture:
      "https://cdn3.riastatic.com/photosnew/auto/photo/mitsubishi_lancer__499455393f.webp",
  },
  {
    id: 2,
    title: "2Mitsubishi Lancer X",
    cost: 12000,
    picture:
      "https://cdn3.riastatic.com/photosnew/auto/photo/mitsubishi_lancer__499455393f.webp",
  },
  {
    id: 3,
    title: "3Mitsubishi Lancer X",
    cost: 13400,
    picture:
      "https://cdn3.riastatic.com/photosnew/auto/photo/mitsubishi_lancer__499455393f.webp",
  },
  {
    id: 4,
    title: "4Mitsubishi Lancer X",
    cost: 5900,
    picture:
      "https://cdn3.riastatic.com/photosnew/auto/photo/mitsubishi_lancer__499455393f.webp",
  },
  {
    id: 5,
    title: "5Mitsubishi Lancer X",
    cost: 6750,
    picture:
      "https://cdn3.riastatic.com/photosnew/auto/photo/mitsubishi_lancer__499455393f.webp",
  },
  {
    id: 6,
    title: "6Mitsubishi Lancer X",
    cost: 11000,
    picture:
      "https://cdn3.riastatic.com/photosnew/auto/photo/mitsubishi_lancer__499455393f.webp",
  },
  {
    id: 7,
    title: "7Mitsubishi Lancer X",
    cost: 6200,
    picture:
      "https://cdn3.riastatic.com/photosnew/auto/photo/mitsubishi_lancer__499455393f.webp",
  },
  {
    id: 8,
    title: "8Mitsubishi Lancer X",
    cost: 10000,
    picture:
      "https://cdn3.riastatic.com/photosnew/auto/photo/mitsubishi_lancer__499455393f.webp",
  },
  {
    id: 9,
    title: "9Mitsubishi Lancer X",
    cost: 10000,
    picture:
      "https://cdn3.riastatic.com/photosnew/auto/photo/mitsubishi_lancer__499455393f.webp",
  },
  {
    id: 10,
    title: "10Mitsubishi Lancer X",
    cost: 7000,
    picture:
      "https://cdn3.riastatic.com/photosnew/auto/photo/mitsubishi_lancer__499455393f.webp",
  },
];

const router = new express.Router();

router.get("/getCars", (req, res) => {
  res.json(cars);
});

router.get("/getCar", (req, res) => {
  const id = req.query.id;

  res.json(cars[id - 1]);
});

export default router;
