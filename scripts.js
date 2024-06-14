const texto = document.querySelector("#text");
const entrada = document.querySelector("#entrada");
const reiniciar = document.querySelector("#reiniciar");
const resultado = document.querySelector("#resultado");
const historico = document.querySelector("#historico");
const toggleThemeBtn = document.querySelector("#alternar-tema");

const textos = [
	"O sol é brilhante.",

	"A lua está cheia.",

	"Ele comeu uma maçã.",

	"Ela gosta de ler.",

	"O carro é azul.",

	"Vamos ao parque.",

	"O café está quente.",

	"Ele é meu amigo.",

	"Hoje está chovendo.",

	"A casa é grande.",

	"O céu estava claro e azul naquela manhã de verão, e as aves cantavam alegremente nas árvores.",

	"A viagem de carro pela costa foi uma experiência inesquecível, com paisagens de tirar o fôlego em cada curva.",

	"Ela passou a tarde inteira lendo seu livro favorito, perdida nas páginas de uma história fascinante.",

	"Ele decidiu que era hora de aprender a tocar violão, algo que sempre quis fazer desde a infância.",

	"O cheiro de pão fresco vindo da padaria da esquina sempre trazia lembranças felizes de sua infância.",

	"Eles passaram o fim de semana acampando nas montanhas, apreciando a beleza da natureza ao redor.",

	"A nova receita de bolo de chocolate que ela tentou foi um sucesso, com todos pedindo a receita.",

	"Ele passou horas montando o quebra-cabeça de mil peças, sentindo-se realizado ao colocar a última peça.",

	"A música clássica tocando ao fundo criou um ambiente tranquilo e relaxante para a noite de estudos.",

	"Eles decidiram adotar um cachorro, trazendo um novo e alegre membro para a família.",

	"Era uma vez, em um reino distante, um jovem chamado Eduardo. Ele vivia em uma pequena vila cercada por vastas florestas e montanhas majestosas. Eduardo era conhecido por sua curiosidade insaciável e desejo de explorar o mundo além dos limites de sua vila. Desde pequeno, ele passava horas lendo livros sobre aventuras e descobertas, sonhando com o dia em que poderia viver suas próprias histórias.",

	"Um dia, enquanto passeava pela floresta, Eduardo encontrou um velho sábio sentado à beira de um rio. O sábio tinha longas barbas brancas e olhos que pareciam conhecer todos os segredos do universo. Intrigado, Eduardo se aproximou e perguntou ao sábio sobre suas viagens. O velho sorriu e contou-lhe histórias de terras distantes, criaturas místicas e tesouros escondidos. Eduardo ficou fascinado e decidiu que estava na hora de começar sua própria jornada.",

	"Naquela manhã fria de inverno, Joana decidiu que era hora de mudar sua vida. Ela se levantou mais cedo do que de costume, tomou um banho quente e vestiu suas roupas mais confortáveis. Depois de preparar um café da manhã simples, mas nutritivo, ela pegou sua mochila e saiu de casa. O ar gelado a envolveu, mas Joana se sentiu revigorada. Caminhou até a estação de trem, onde comprou um bilhete para uma cidade que sempre quis visitar. Sentada no trem, observou a paisagem passar pela janela, enquanto seu coração batia com a expectativa de novas aventuras.",

	"A biblioteca velha da cidade sempre foi um lugar especial para Carlos. Ele adorava passar horas entre as estantes empoeiradas, descobrindo livros antigos e esquecidos. Em um dia chuvoso, ele encontrou um livro raro sobre alquimia. Fascinado, passou o resto do dia lendo sobre mistérios e segredos antigos. A partir daquele momento, Carlos decidiu dedicar sua vida ao estudo da alquimia. Ele passou anos pesquisando, experimentando e anotando suas descobertas. Eventualmente, seus esforços foram recompensados com a descoberta de um elixir que prometia curar qualquer doença.",

	"Maria sempre sonhou em ser bailarina. Desde pequena, ela passava horas assistindo a vídeos de balé e imitando os movimentos graciosos das dançarinas. Aos dez anos, começou a fazer aulas de balé. Sua dedicação era evidente, e logo se destacou entre suas colegas. Quando completou dezesseis anos, foi aceita em uma prestigiosa escola de dança. A rotina era exaustiva, mas Maria nunca desistiu. Seus esforços culminaram em uma brilhante performance no teatro principal da cidade, onde sua família e amigos aplaudiram de pé, orgulhosos de sua conquista.",

	"O velho farol na costa era o lugar favorito de Pedro. Ele costumava ir até lá para pensar e apreciar a vista do oceano. Em uma tarde de verão, enquanto observava as ondas batendo nas rochas, notou algo brilhando entre as pedras. Curioso, desceu até a praia e encontrou uma pequena garrafa com um pergaminho dentro. Ao abrir, descobriu que era um mapa antigo, indicando a localização de um tesouro. Pedro passou semanas seguindo as pistas do mapa, enfrentando desafios e decifrando enigmas. Finalmente, encontrou o tesouro enterrado, que continha moedas de ouro e joias raras.",

	"Clara sempre foi apaixonada por astronomia. Todas as noites, ela subia até o telhado de sua casa com seu telescópio e passava horas observando as estrelas. Em uma noite clara de outono, ela avistou um cometa raro atravessando o céu. Excitada, anotou todas as suas observações e enviou para um observatório local. Para sua surpresa, recebeu uma resposta convidando-a para uma visita. Durante a visita, conheceu astrônomos renomados e teve a oportunidade de usar telescópios avançados. A experiência solidificou sua decisão de seguir carreira na astronomia.",

	"Lucas era um jovem aventureiro que adorava explorar florestas e montanhas. Em uma de suas expedições, encontrou uma caverna escondida entre as rochas. Dentro, descobriu pinturas rupestres que datavam de milhares de anos. Fascinado pela descoberta, tirou várias fotos e anotou todas as suas observações. De volta à cidade, apresentou suas descobertas a um grupo de arqueólogos. Sua descoberta foi considerada um marco importante na história da região, e Lucas foi convidado a participar de várias expedições arqueológicas, realizando seu sonho de explorar e descobrir.",

	"Ana tinha uma habilidade especial com as palavras. Desde pequena, adorava escrever histórias e poemas. Aos vinte anos, decidiu compartilhar seu talento com o mundo e começou a escrever um romance. Passou meses trabalhando na história, criando personagens cativantes e tramas envolventes. Finalmente, seu livro foi publicado e se tornou um sucesso. Ana foi convidada para várias entrevistas e eventos literários. Sua vida mudou completamente, mas ela continuou humilde e dedicada à sua paixão. Para ela, a maior recompensa era saber que suas palavras tocavam o coração das pessoas.",

	"João sempre teve um fascínio por música. Aos cinco anos, começou a tocar piano, e aos doze, já compunha suas próprias músicas. Seu talento foi reconhecido quando ganhou um concurso nacional de jovens músicos. Com o prêmio, João teve a oportunidade de estudar em uma renomada escola de música no exterior. Lá, aperfeiçoou suas habilidades e conheceu músicos talentosos de todo o mundo. Após anos de estudo e prática, João voltou ao seu país e iniciou uma carreira brilhante como pianista e compositor, encantando plateias com suas performances emocionantes.",

	"Renata sempre foi curiosa sobre o mundo ao seu redor. Formou-se em biologia e decidiu dedicar sua vida à pesquisa. Em uma expedição à Amazônia, descobriu uma planta rara com propriedades medicinais desconhecidas. Passou meses estudando a planta, realizando experimentos e documentando suas descobertas. Seus esforços foram reconhecidos quando publicou um artigo científico que revolucionou a medicina natural. Renata foi premiada por sua contribuição à ciência e continuou suas pesquisas, determinada a descobrir novas formas de melhorar a saúde e o bem-estar das pessoas.",

	"Miguel era um talentoso artista plástico, conhecido por suas esculturas detalhadas e expressivas. Desde jovem, ele esculpia em madeira, pedra e argila, criando obras que capturavam a essência da condição humana. Um dia, recebeu uma encomenda especial: uma escultura para o parque central da cidade. Miguel trabalhou arduamente, inspirando-se nas histórias e nas pessoas da comunidade. Quando a escultura foi finalmente revelada, tornou-se um símbolo de unidade e esperança. As pessoas vinham de longe para admirar a obra, e Miguel se sentiu orgulhoso de ter deixado um legado duradouro.",
];

localStorage.setItem("testeEmAndamento", false);

function novoTexto() {
	const index = Math.floor(Math.random() * textos.length);
	texto.textContent = textos[index];
}

function atualizarTeste() {
	iniciar();
	if (entrada.value === texto.textContent) {
		verificar();
	}
}

function iniciar() {
	const statusDoTeste = JSON.parse(localStorage.getItem("testeEmAndamento"));
	if (!statusDoTeste) {
		localStorage.setItem("tempoInicial", new Date().getTime());
		localStorage.setItem("testeEmAndamento", true);
	}
}

function verificar() {
	const tempoFinal = new Date().getTime();
	const tempoInicial = parseInt(localStorage.getItem("tempoInicial"));
	const tempoGasto = tempoFinal - tempoInicial;

	resultado.textContent = `Parabéns, você levou ${tempoGasto / 1000} segundos!`;

	localStorage.setItem("testeEmAndamento", false);
	entrada.value = "";
	localStorage.setItem("tempoInicial", new Date().getTime());
	novoTexto();
}

function alternarTema() {
	const body = document.body;

	body.classList.toggle("claro");
	body.classList.toggle("escuro");
}

toggleThemeBtn.addEventListener("click", alternarTema);
entrada.addEventListener("click", atualizarTeste);

novoTexto();
