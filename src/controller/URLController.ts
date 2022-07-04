import { config } from "../config/Constants";
import { Request, Response } from "express";
import shortId from "shortid";

export class URLController {
    public async shorten(req:Request, res:Response): Promise<void> {
      
        

        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`

        res.json({ originURL, hash, shortURL })
    }

    public async redirect(req:Request, res:Response): Promise<void> {
        

        const { hash } = req.params
        const url = {
            originUrl: "https://cloud.mongodb.com/v2/62bf489714d7bf0fd47424be#clusters/connect?clusterId=urlshortner-dio",
            hash: "AqpgaL2Rr",
            shortURL: "http://localhost:5000/AqpgaL2Rr"

        }

        res.redirect(url.originUrl)
    }
}