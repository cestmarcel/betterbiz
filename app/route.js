const yelp = require('./apiRoute')
const orm = require('../connection/orm')
const path = require('path')

function router( app ){
    //[GET] yelp results
    app.get('/api/yelp', async ( req, res ) => {
        const result = await yelp.generalSearch()
        console.log(result)
        res.send(result)
    })
    //[GET] yelp results by business name
    app.get('/api/yelp/:busName', async ( req, res ) => {
        const result = await yelp.fetchByName(req.params.busName)
        console.log(result)
        res.send(result)
    })

    app.get('/', ( req, res ) => {
        res.sendFile(path.join(__dirname, '..', '/client/build/index.html'))
    })
    //[POST] submit business information
    app.post('/api/submit', async ( req, res ) => {
        if( !req.body.busType || !req.body.name ){
            res.send({status:false, message:'Business Type and Name is required.'})
        }else{
            const busData = {
                busType: req.body.busType,
                name: req.body.name,
                address:{
                    address1: req.body.address,
                    city: req.body.city,
                    country: req.body.country,
                    postalCode: req.body.postalCode
                },
                highlight: req.body.highlight.split(',')
            }
            await orm.insertBusiness(busData)
            res.send({status:true, message:'Success'})
        }
    })
    // app.get('/api/words', async function(req, res) {
    //     console.log( '[GET] getting word')

    //     res.send( list )
    // })

    // app.post( '/api/words', async function( req, res ){
    //     console.log( '[POST /api/words] req.body: ', req.body )

    //     const saveResult = { _id: true }
    //     console.log( '[POST /api/dogs] saveResult: ', saveResult )

    //     if( saveResult._id ){
    //         res.send( { status: true, message: 'Dog saved' } )
    //     } else {
    //         res.send( { status: false, message: 'Someting went wong' } )
    //     }

    // })
}

module.exports = router;