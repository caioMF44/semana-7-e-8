const filmes = [
    {
        id: 1,
        titulo: "Rivais",
        imagem: "assets/poster rivais.webp",
        descricao: "Um filme sobre rivalidades intensas e momentos decisivos."
    },
    {
        id: 10,
        titulo: "Star Wars: A Vingança dos Sith",
        imagem: "assets/starwars3.jpg",
        descricao: "o fim da historia do jovem anakim e o começo do Darth Vader."
    },
    {
        id: 2,
        titulo: "Super-Herói: O Filme",
        imagem: "assets/super heroi o filme.jpg",
        descricao: "Uma paródia engraçada dos filmes de super-heróis."
    },
    {
        id: 3,
        titulo: "John Wick de volta ao jogo",
        imagem: "assets/poster john wick de volta ao jjogo.webp",
        descricao: "O lendário assassino está de volta em busca de vingança."
    },
    {
        id: 4,
        titulo: "As Branquelas",
        imagem: "assets/as branquelas.jpg",
        descricao: "Dois agentes do FBI se disfarçam de socialites."
    },
    {
        id: 5,
        titulo: "O Poderoso Chefão",
        imagem: "assets/poster the godfather.webp",
        descricao: "Clássico sobre a máfia italiana nos EUA."
    },
    {
        id: 11,
        titulo: "clube da luta",
        imagem: "assets/clubedaluta.jpg",
        descricao: "Um homem insatisfeito com sua vida se junta a um clube secreto."
    },
    {
        id: 6,
        titulo: "Batman - O Cavaleiro das Trevas",
        imagem: "assets/batman o cavaleiro das trevas.jpg",
        descricao: "Batman enfrenta o caos causado pelo Coringa."
    },
    {
        id: 7,
        titulo: "Diário de uma Paixão",
        imagem: "assets/diario de uma paixao poster.jpg",
        descricao: "Uma linda história de amor que atravessa décadas."
    },
    {
        id: 8,
        titulo: "Todo Tempo que Temos",
        imagem: "assets/todo tempo que temos.webp",
        descricao: "Duas pessoas encontram o amor durante uma crise."
    },
    {
        id: 12,
        titulo: "questão de tempo",
        imagem: "assets/questãodetempo.webp",
        descricao: "um jovem descobre que pode viajar no tempo."
    },
    {
        id: 9,
        titulo: "Todos Menos Você",
        imagem: "assets/todos menos voce.webp",
        descricao: "Comédia romântica com situações inesperadas."
    }
];

if (window.location.pathname.includes("detalhes.html")) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const filme = filmes.find(f => f.id === id);

    if (filme) {
        document.getElementById("titulo").textContent = filme.titulo;
        document.getElementById("imagem").src = filme.imagem;
        document.getElementById("imagem").alt = filme.titulo;
        document.getElementById("descricao").textContent = filme.descricao;
    } else {
        document.getElementById("detalhes").innerHTML = "<p>Filme não encontrado.</p>";
    }
}