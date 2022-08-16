const data = [
  { slug: 'admin', title: 'Администратор' },
  { slug: 'client', title: 'Клиент' }
]

export default () => new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    Math.random() > .5
      ? resolve( data )
      : reject( 'Ошибка при запросе' )
  }, 1000 )
} )