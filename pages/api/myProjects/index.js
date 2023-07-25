import { IncomingMessage, ServerResponse } from "http";
import DB from "@database";


const allMyProjects = async (req, res) => {
    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;

    // Notice: We're manually setting the response object
    // However Next.JS offers Express-like helpers :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "GET");
    res.end(JSON.stringify({ length, data: allEntries }));

  
};

export default allMyProjects;