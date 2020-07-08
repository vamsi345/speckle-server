const chai = require( 'chai' )
const chaiHttp = require( 'chai-http' )
const assert = require( 'assert' )

const root = require( 'app-root-path' )
const { init } = require( `${root}/app` )
const knex = require( `${root}/db/knex` )

const expect = chai.expect
chai.use( chaiHttp )


const { createUser, createPersonalAccessToken, revokeToken, revokeTokenById, validateToken, getUserTokens } = require( '../services/users' )
const { createStream, getStream, updateStream, deleteStream, getStreamsUser, grantPermissionsStream, revokePermissionsStream } = require( '../services/streams' )
const { createCommit, createObject, createObjects, getObject, getObjects, getObjectChildren, getObjectChildrenQuery } = require( '../services/objects' )

const sampleObjects = require( './sampleObjectData' )

let sampleCommit = JSON.parse( `{
  "Objects": [
    {
      "speckleType": "reference",
      "referencedId": "8a9b0676b7fe3e5e487bb34549e67f67"
    }
  ],
  "Description": "draft commit",
  "Parents": [
    "beb6c53c4e531f4c259a59e943dd3043"
  ],
  "CreatedOn": "2020-03-18T12:06:07.82307Z",
  "id": "79eb41764cc2c065de752bd704bfc4aa",
  "speckleType": "Speckle.Core.Commit",
  "__tree": [
    "79eb41764cc2c065de752bd704bfc4aa.8a9b0676b7fe3e5e487bb34549e67f67"
  ]
}` )

let sampleObject = JSON.parse( `{
  "Vertices": [],
  "id": "8a9b0676b7fe3e5e487bb34549e67f67",
  "applicationId": "test",
  "speckleType": "Tests.Polyline"
}` )

describe( 'Objects', ( ) => {

  let userOne = {
    username: 'dim42',
    name: 'Dimitrie Stefanescu',
    email: 'didimitrie43@gmail.com',
    password: 'sn3aky-1337-b1m'
  }

  let stream = {
    name: 'Test Stream References',
    description: 'Whatever goes in here usually...'
  }

  before( async ( ) => {
    await knex.migrate.rollback( )
    await knex.migrate.latest( )

    userOne.id = await createUser( userOne )
    stream.id = await createStream( stream, userOne.id )
  } )

  after( async ( ) => {
    // await knex.migrate.rollback( )
  } )


  it( 'Should create a commit', async ( ) => {
    let myId = await createCommit( stream.id, userOne.id, sampleCommit )
    expect( myId ).to.not.be.null
  } )

  it( 'Should create objects', async ( ) => {
    sampleObject.id = await createObject( sampleObject )
    sampleCommit.id = await createObject( sampleCommit )
  } )

  let objCount_1 = 10
  let objCount_2 = 1000
  let objs = [ ]
  let objs2 = [ ]

  it( `Should create ${objCount_1} objects`, async ( ) => {
    for ( let i = 0; i < objCount_1; i++ ) {
      objs.push( {
        amazingness: i * i,
        somethingness: `Sample ${i%2===0 ? 'SUPER MEGA' : '1010101000010101'} ERRR`,
        __tree: [
          "79eb41764cc2c065de752bd704bfc4aa.8a9b0676b7fe3e5e487bb34549e67f67",
          "79eb41764cc2c065de752bd704bfc4aa.8a9b0676b7fe3e5e487bb34549e67f67" + i / 2.0,
          "79eb41764cc2c065de752bd704bfc4aa." + i + "." + i * i,
        ]
      } )
    }

    let ids = await createObjects( objs )

    expect( ids ).to.have.lengthOf( objCount_1 )

  } ).timeout( 30000 )

  it( `Should create ${objCount_2} objects`, async ( ) => {
    for ( let i = 0; i < objCount_2; i++ ) {
      objs2.push( {
        amazingness: i * i,
        somethingness: `Sample HASH ${i%2===0 ? 'SUPER MEGA HASH CHANGE' : '100101'} ERRR`,
        x: 10,
        y: i * 2,
        z: i * 0.23432,
        random: { blargh: 'A a auctor arcu id enim felis, luctus sed sit lacus enim phasellus ultricies, quis fermentum, platea placerat vel integer. Enim urna natoque eros id volutpat voluptatum, vitae pede nec in nam. In libero nullam, habitasse auctor a laoreet justo. Vestibulum enim laoreet quis magna in. Non pharetra sit semper vitae ac fusce, non nisl molestie porttitor leo sed, quam vulputate, suscipit sed elit fringilla justo viverra, mattis dignissim ullamcorper a in. Pellentesque velit posuere ipsum, eu pharetra. Magna ac orci sit, malesuada lacinia mauris sed sunt ac neque. Mollis volutpat cras a, donec ac, etiam commodo id fringilla et tempor mi, pellentesque lacus ac morbi ultrices. Diam amet felis aliquam nibh nunc sed. Rhoncus malesuada in malesuada proin sed nam, viverra ante sollicitudin eu augue risus nisl, velit interdum vivamus dictumst. Phasellus fusce wisi non ipsum elit gravida. Nunc scelerisque, interdum adipiscing quam integer commodo, modi tempor sociis sociosqu dui nullam.A a auctor arcu id enim felis, luctus sed sit lacus enim phasellus ultricies, quis fermentum, platea placerat vel integer. Enim urna natoque eros id volutpat voluptatum, vitae pede nec in nam. In libero nullam, habitasse auctor a laoreet justo. Vestibulum enim laoreet quis magna in. Non pharetra sit semper vitae ac fusce, non nisl molestie porttitor leo sed, quam vulputate, suscipit sed elit fringilla justo viverra, mattis dignissim ullamcorper a in. Pellentesque velit posuere ipsum, eu pharetra. Magna ac orci sit, malesuada lacinia mauris sed sunt ac neque. Mollis volutpat cras a, donec ac, etiam commodo id fringilla et tempor mi, pellentesque lacus ac morbi ultrices. Diam amet felis aliquam nibh nunc sed. Rhoncus malesuada in malesuada proin sed nam, viverra ante sollicitudin eu augue risus nisl, velit interdum vivamus dictumst. Phasellus fusce wisi non ipsum elit gravida. Nunc scelerisque, interdum adipiscing quam integer commodo, modi tempor sociis sociosqu dui nullam.Lorem ipsum dolor sit amet, lorem scelerisque curabitur elementum eligendi, sed ut nibh. Nullam ac ut proin tortor tortor, ultrices odio litora eu, at lectus. Nulla et est, donec at, rutrum massa eros elit nisl sed, integer amet fusce tempus phasellus aliquam posuere, molestie adipiscing quas magnis convallis tellus. Exercitation purus aliquam, tortor pellentesque. Consequat arcu quis eros, turpis ultrices tempor elementum, platea cursus dignissim nulla. Ultrices vestibulum sit et taciti ut, nunc interdum. In eleifend amet sed a tortor, sed condimentum pede nam magna, nisl nam tristique pede ut at, eleifend sit ac vitae orci, nec wisi vestibulum tortor facilisis. Cras nunc debitis duis placerat curabitur, conubia vel ullamcorper vestibulum morbi donec, molestie rutrum.Cras elit ut, quis diam sed sollicitudin morbi rhoncus, ante velit, at ipsum debitis. Ut ipsum, et sed morbi odio libero viverra eget, nihil blandit nonummy mauris. Et sed nisl fermentum nunc sapien erat, dolor mattis pellentesque nec sapien faucibus, praesent lectus odio rhoncus id dolor, velit at lorem iaculis condimentum. Id suscipit amet nec rutrum, erat magnis amet id, lacus tristique. Neque id mauris dapibus consectetuer ut scelerisque, tincidunt fringilla quis dolores, praesent ipsum, nec tortor ultricies, posuere a fusce et magna.' },
        __tree: [
          "79eb41764cc2c065de752bd704bfc4aa.8a9b0676b7fe3e5e487bb34549e67f6723",
          "79eb41764cc2c065de752bd704bfc4aa.8a9b0676b7fe3e5e487bb34549e623237f67" + i / 2.0,
          "79eb41764cc2c065de752bd704asdf4aa." + i + "." + i * i,
          "79eb41764cc2c065de752bd704bfc4aa." + i + "." + i * i + 3,
        ]
      } )
    }

    let myIds = await createObjects( objs2 )

    myIds.forEach( ( h, i ) => objs2[ i ].id = h )

    expect( myIds ).to.have.lengthOf( objCount_2 )

  } ).timeout( 30000 )

  it( 'Should get a single object', async ( ) => {

    let obj = await getObject( { objectId: sampleCommit.id } )
    expect( obj ).to.not.be.null
  } )

  it( 'Should get more objects', async ( ) => {
    let myObjs = await getObjects( objs.map( o => o.id ) )
    expect( myObjs ).to.have.lengthOf( objs.length )

    let match1 = myObjs.find( o => o.id === objs[ 0 ].id )
    expect( match1 ).to.not.be.null
    expect( match1.id ).to.equal( objs[ 0 ].id )

    let match2 = myObjs.find( o => o.id === objs[ 2 ].id )
    expect( match2 ).to.not.be.null
    expect( match2.id ).to.equal( objs[ 2 ].id )
  } )

  let parentObjectId

  it( 'Should get object children', async ( ) => {

    let objs_1 = createManyObjects( 100, 'noise__' )
    let ids = await createObjects( objs_1 )
    // console.log( ids )
    // console.log(ids[ 0 ])

    // The below are just performance benchmarking.
    // let objs_2 = createManyObjects( 20000, 'noise_2' )
    // let ids2 = await createObjects( objs_2 )

    // let objs_3 = createManyObjects( 100000, 'noise_3' )
    // let ids3 = await createObjects( objs_3 )

    // let { rows } = await getObjectChildren( { objectId: ids[0], select: ['id', 'name', 'sortValueB'] } )
    // let { rows } = await getObjectChildren( { objectId: ids[ 0 ] } )

    let limit = 50
    let { objects: rows_1, cursor: cursor_1 } = await getObjectChildren( { limit, objectId: ids[ 0 ], select: [ 'nest.mallard', 'test.value', 'test.secondValue', 'nest.arr[0]', 'nest.arr[1]' ] } )

    expect( rows_1.length ).to.equal( limit )
    expect( rows_1[ 0 ] ).to.be.an( 'object' )
    expect( rows_1[ 0 ] ).to.have.property( 'id' )
    expect( rows_1[ 0 ] ).to.have.nested.property( 'data.test.secondValue' )
    expect( rows_1[ 0 ] ).to.have.nested.property( 'data.nest.mallard' )

    expect( cursor_1 ).to.be.a( 'string' )

    let { objects: rows_2, cursor: cursor_2 } = await getObjectChildren( { limit, objectId: ids[ 0 ], select: [ 'nest.mallard', 'test.value', 'test.secondValue', 'nest.arr[0]', 'nest.arr[1]' ], cursor: cursor_1 } )

    expect( rows_2.length ).to.equal( 50 )
    expect( rows_2[ 0 ] ).to.be.an( 'object' )
    expect( rows_2[ 0 ] ).to.have.property( 'id' )
    expect( rows_2[ 0 ] ).to.have.nested.property( 'data.test.secondValue' )
    expect( rows_2[ 0 ] ).to.have.nested.property( 'data.nest.mallard' )


    let { objects, cursor } = await getObjectChildren( { objectId: ids[ 0 ], limit: 1000 } )
    expect( objects.length ).to.equal( 100 )

    parentObjectId = ids[ 0 ]

  } ).timeout( 30000 )

  it( 'should query object children, ascending order', async ( ) => {
    // we're assuming the prev test objects exist

    let test = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      select: [ 'id', 'test.value' ],
      limit: 3,
      query: [ { field: 'test.value', operator: '>', value: 1 }, { field: 'test.value', operator: '<', value: 24 }, { verb: 'OR', field: 'test.value', operator: '=', value: 42 } ],
      orderBy: { field: 'test.value', direction: 'asc' }
    } )

    let test2 = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      select: [ 'id', 'test.value', 'nest.duck' ],
      limit: 40,
      query: [ { field: 'test.value', operator: '>', value: 1 }, { field: 'test.value', operator: '<', value: 24 }, { verb: 'OR', field: 'test.value', operator: '=', value: 42 } ],
      orderBy: { field: 'test.value', direction: 'asc' },
      cursor: test.cursor
    } )

    // console.log( test.cursor )

    // console.log( test.objects.map( o => ( { v: o.data.test.value, id: o.id } ) ))
    // console.log( test2.objects.map( o =>  ( { v: o.data.test.value, id: o.id } )))
    // console.log( test2.objects)

    // limit
    expect( test.objects.length ).to.equal( 3 )
    expect( test2.objects.length ).to.equal( 20 )

    // cursors
    expect( test.cursor ).to.be.a( 'string' )
    expect( test2.cursor ).to.equal( null )

    // total count should be correct (invariant) across all requests with same query
    expect( test.totalCount ).to.equal( 23 )
    expect( test2.totalCount ).to.equal( 23 )

    expect( test.objects[ 0 ].data.test.value ).to.be.below( test.objects[ 1 ].data.test.value )
    expect( test2.objects[ 0 ].data.test.value ).to.be.below( test2.objects[ 1 ].data.test.value )

    // continuity 
    expect( test.objects[ test.objects.length - 1 ].data.test.value + 1 ).to.equal( test2.objects[ 0 ].data.test.value )
  } )

  it( 'should query object children desc on a field with duplicate values, without selecting fields', async ( ) => {

    // Note: the `similar` field is incremented on i%3===0, resulting in a pattern of 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, etc. 
    let test3 = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      // select: [ 'similar', 'id' ],
      query: [ { field: 'similar', operator: '>=', value: 0 }, { field: 'similar', operator: '<', value: 100 } ],
      orderBy: { field: 'similar', direction: 'asc' },
      limit: 5
    } )

    let test4 = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      // select: [ 'similar', 'id' ],
      query: [ { field: 'similar', operator: '>=', value: 0 }, { field: 'similar', operator: '<', value: 100 } ],
      orderBy: { field: 'similar', direction: 'asc' },
      cursor: test3.cursor,
      limit: 5
    } )

    // limit  
    expect( test3.objects.length ).to.equal( 5 )
    expect( test4.objects.length ).to.equal( 5 )

    // cursors
    expect( test3.cursor ).to.be.a( 'string' )
    expect( test4.cursor ).to.be.a( 'string' )

    // total count should be correct (invariant) across all requests with same query
    expect( test3.totalCount ).to.equal( 100 )
    expect( test4.totalCount ).to.equal( 100 )

    expect( test3.objects[ 0 ].data.similar ).to.be.below( test3.objects[ 1 ].data.similar ) // 0, 1, 1, 1, ... 
    expect( test4.objects[ 0 ].data.similar ).to.be.below( test4.objects[ 3 ].data.similar )

    // continuity (in reverse)
    expect( test3.objects[ test3.objects.length - 1 ].data.similar ).to.equal( test3.objects[ test3.objects.length - 2 ].data.similar + 1 )
    expect( test3.objects[ test3.objects.length - 1 ].data.similar ).to.equal( test4.objects[ 0 ].data.similar )
    expect( test4.objects[ 1 ].data.similar ).to.equal( test4.objects[ 2 ].data.similar - 1 )
  } )

  it( 'should query object children with no results ', async ( ) => {
    let test = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      query: [ { field: 'test.value', operator: '>=', value: 10 }, { field: 'test.value', operator: '<', value: 9 } ],
      orderBy: { field: 'test.value', direction: 'desc' }
    } )

    expect( test.totalCount ).to.equal( 0 )
    expect( test.cursor ).to.be.null
  } )

  it( 'should not allow invalid query operators ', async ( ) => {
    try {
      let test = await getObjectChildrenQuery( {
        objectId: parentObjectId,
        query: [ { field: 'test.value', operator: '> 0; BOBBY DROPPPPED MY TABLES; -- and the bass?', value: 10 }, { field: 'test.value', operator: '<', value: 9 } ],
        orderBy: { field: 'test.value', direction: 'desc' }
      } )
      assert.fail( 'sql injections are bad for health' )
    } catch ( err ) {
      // pass
    }

  } )

  it( 'should query childern and sort them by a boolean value ', async ( ) => {
    let test = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      limit: 5,
      select: [ 'test.value', 'nest.duck' ],
      query: [ { field: 'test.value', operator: '<', value: 10 } ],
      orderBy: { field: 'nest.duck', direction: 'desc' }
    } )

    let test2 = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      limit: 5,
      select: [ 'test.value', 'nest.duck' ],
      query: [ { field: 'test.value', operator: '<', value: 10 } ],
      orderBy: { field: 'nest.duck', direction: 'desc' },
      cursor: test.cursor
    } )

    expect( test.objects[ 0 ].data.nest.duck ).to.equal( true )
    expect( test2.objects[ test2.objects.length - 1 ].data.nest.duck ).to.equal( false ) // last duck should be false

  } )

  it( 'should query childern and sort them by a string value ', async ( ) => {
    let limVal = 20

    let test = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      limit: 5,
      query: [ { field: 'test.value', operator: '<', value: limVal } ],
      orderBy: { field: 'name', direction: 'asc' }
    } )

    let test2 = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      limit: 5,
      query: [ { field: 'test.value', operator: '<', value: limVal } ],
      orderBy: { field: 'name', direction: 'asc' },
      cursor: test.cursor
    } )

    expect( test.objects.length ).to.equal( 5 )
    expect( test.cursor ).to.be.a( 'string' )

    expect( test.objects[ 0 ].data.name ).to.equal( 'mr. 0' )
    expect( test.objects[ 1 ].data.name ).to.equal( 'mr. 1' )
    expect( test.objects[ 2 ].data.name ).to.equal( 'mr. 10' ) // remeber kids, this is a lexicographical sort
    expect( test.objects[ 4 ].data.name ).to.equal( 'mr. 12' )
    expect( test2.objects[ 0 ].data.name ).to.equal( 'mr. 13' )

  } )

  it( 'should query childern and sort them by id by default ', async ( ) => {
    let test = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      limit: 3,
      query: [ { field: 'test.value', operator: '>=', value: 10 }, { field: 'test.value', operator: '<', value: 100 } ],
    } )

    expect( test.totalCount ).to.equal( 90 )

    let test2 = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      limit: 3,
      query: [ { field: 'test.value', operator: '>=', value: 10 }, { field: 'test.value', operator: '<', value: 100 } ],
      cursor: test.cursor
    } )
    expect( test.objects[ 1 ].id < test.objects[ 2 ].id )
    expect( test.objects[ 2 ].id < test2.objects[ 0 ].id )
  } )

  it( 'should just order results by something', async ( ) => {

    let test = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      limit: 2,
      orderBy: { field: 'test.value', direction: 'desc' }
    } )

    let test2 = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      limit: 2,
      orderBy: { field: 'test.value', direction: 'desc' },
      cursor: test.cursor
    } )

    expect( test.objects[ 1 ].data.test.value ).to.equal( test2.objects[ 0 ].data.test.value + 1 ) // continuity check

    let test3 = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      limit: 50,
      orderBy: { field: 'nest.duck', direction: 'desc' }
    } )

    let test4 = await getObjectChildrenQuery( {
      objectId: parentObjectId,
      limit: 50,
      orderBy: { field: 'nest.duck', direction: 'desc' },
      cursor: test3.cursor
    } )

    expect( test3.objects[ 49 ].data.nest.duck ).to.equal( true )
    expect( test4.objects[ 0 ].data.nest.duck ).to.equal( false )

  } )

  it( 'should batch create objects', async ( ) => {
    assert.fail( )
  } )

  it( 'should stream objects back', async ( ) => {
    assert.fail( )
  } )
} )

const crypto = require( 'crypto' )

function createManyObjects( shitTon, noise ) {
  shitTon = shitTon || 10000
  noise = noise || Math.random( ) * 100

  let objs = [ ]

  let base = { name: 'base bastard 2', noise: noise, __closure: {} }
  objs.push( base )
  let k = 0

  for ( let i = 0; i < shitTon; i++ ) {
    let baby = {
      name: `mr. ${i}`,
      nest: { duck: i % 2 === 0, mallard: 'falsey', arr: [ i + 42, i, i ] },
      test: { value: i, secondValue: 'mallard ' + i % 10 },
      similar: k,
      even: i % 2 === 0,
      objArr: [ { a: i }, { b: i * i }, { c: true } ],
      noise: noise,
      sortValueA: i,
      sortValueB: i * 0.42 * i
    }
    if ( i % 3 === 0 ) k++
    getAFuckingId( baby )
    base.__closure[ baby.id ] = 1

    if ( i > 1000 )
      base.__closure[ baby.id ] = i / 1000

    objs.push( baby )
  }

  getAFuckingId( base )
  return objs
}

function getAFuckingId( obj ) {
  obj.id = obj.id || crypto.createHash( 'md5' ).update( JSON.stringify( obj ) ).digest( 'hex' )
}