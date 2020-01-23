var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: 'harry-potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: 'król-lew.jpg'
    },
    {
        id: 3,
        title: 'Władca Pierścieni',
        desc: 'Jak Frodo zniszczył Pierścień',
        poster: 'władca-pierścieni.jpg'
    },
    {
        id: 4,
        title: 'Głupi i głupszy',
        desc: 'Opis zbędny :D',
        poster: 'głupi-i-głupszy.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', { src: movie.poster })
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );


ReactDOM.render(element, document.getElementById('app'));