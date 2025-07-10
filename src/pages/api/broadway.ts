import axios from 'axios';
import * as cheerio from 'cheerio';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const url = 'https://www.broadway.com/shows/tickets/';
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const shows: any[] = [];

        $(".list-view__item").each((_, el) => {
          const anchor = $(el).find("a");
          const title = anchor.find(".list-view__title").text().trim();
          const image = anchor.find("img").attr("src");
          const link = "https://www.broadway.com" + anchor.attr("href");

          if (title) {
            shows.push({ title, image, link });
          }
        });
          

          res.status(200).json({ shows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Scraping failed' })
    }
}