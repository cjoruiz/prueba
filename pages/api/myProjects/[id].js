import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
// import enablePublicAccess from '@cors'

const MyProjectsDetail = async (req, res) => {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    const db = new DB()
    const myProyectId = req.query.id


    const myProyect = await db.getById(myProyectId)

    // Notice: We're using Next.JS response helpers here :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.status(200).json(myProyect)

  

}



export default MyProjectsDetail;
