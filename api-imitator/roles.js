const data = [
  { slug: 'admin', title: 'Администратор' },
  { slug: 'client', title: 'Клиент' }
]

export default () => new Promise( resolve => {
  setTimeout( () => {
    resolve( data )
  }, 1000 )
} )