import serverlessMysql from 'serverless-mysql'

export const db = serverlessMysql({
    config: {
        host     : 'localhost',
        database : 'angularjs',
        user     : 'root',
        password : ''
      }
  })

export default  async function handler (req,res){
    try {
        const results = await db.query('select * from login')
        await db.end()
        res.json({
            data: results
        })
      } catch (e) {
        res.json({
            error: e.message
        })
      }
}