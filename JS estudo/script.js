function normalizeInput(input) {
    const synonyms = {
        "cadastrar": [
            "cadastro", "castro", "cadastra", "cadrastra", "cadstro", "cadrastr", "cadastar", "cadstrar", "cadastr", "cadatro"
        ],
        "preencher": [
            "preenchido", "preenche", "preencher", "prenchido", "preenchido", "preenchi", "preenchar", "preencahr"
        ],
        "problemas": [
            "problemas", "dificuldades", "dificuldade", "problem", "problemas", "proplemas", "probelmas"
        ],
        "senha": [
            "senha", "senhas", "chave", "senah", "senha", "sehna", "sena", "senh"
        ],
        "agendar": [
            "agendar", "marcar", "reservar", "agendamento", "agendamento", "agend", "agenadar", "agenar"
        ],
        "data": [
            "data", "datas", "horário", "informação", "data", "dat", "daata", "datra"
        ],
        "dores": [
            "dores", "dor", "desconforto", "intenso", "dor aguda", "dore", "doro", "dores", "dorres"
        ],
        "gravidez": [
            "gravidez", "gestação", "nausea", "enjoo", "gravidez", "gravid", "gravidez", "gravez"
        ],
        "menstruação": [
            "menstruação", "colicas", "cólica", "sintomas menstruais", "período", "menstruacao", "menstruação", "menstrsacao", "menstruacao"
        ],
        "ansiedade": [
            "ansiedade", "estresse", "depressão", "saúde mental", "angústia", "ansied", "ansiedade", "ansiedada"
        ],
        "funcionou": [
            "funcionou", "deu certo", "tá certo", "foi bem", "funcionou", "funcinou", "funcion", "funciona"
        ]
    };

    let words = input.split(" ");
    return words.map(word => {
        for (const key in synonyms) {
            if (synonyms[key].includes(word)) {
                return key; // Substitui pela palavra correta
            }
        }
        return word; // Retorna a palavra original se não houver substituição
    }).join(" "); // Junta as palavras de volta em uma string
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const issue = chatInput.value.trim().toLowerCase(); // Normaliza a entrada para minúsculas
    const normalizedIssue = normalizeInput(issue); // Normaliza a entrada
    const chatResponse = document.getElementById('chat-response');

    if (!normalizedIssue) return; // Não envia mensagens vazias

    // Adiciona a mensagem do usuário
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user');
    userMessage.textContent = issue;
    chatResponse.appendChild(userMessage);
    chatInput.value = ''; // Limpa o campo de entrada

    // Resposta do bot
    let responseText = '';

    if (normalizedIssue.includes('cadastrar') || normalizedIssue.includes('registrar')) {
        responseText = 'Para problemas de cadastro, por favor, verifique se você está utilizando o e-mail correto e se o formulário está preenchido corretamente. Se o problema persistir, entre em contato com o suporte técnico.';
    } else if (normalizedIssue.includes('preencher') || normalizedIssue.includes('feito') || normalizedIssue.includes('pronto')) {
        responseText = 'Se o formulário já estiver preenchido e o email estiver correto, mas você não conseguir prosseguir, verifique se recebeu algum código pelo seu email. Caso não tenha recebido, talvez sua caixa de entrada esteja cheia.';
    } else if (normalizedIssue.includes('cheio') || normalizedIssue.includes('email') || normalizedIssue.includes('lotado') || normalizedIssue.includes('ocupado') || normalizedIssue.includes('sobrecarregado')) {   
        responseText = 'Se ela estiver cheia, você pode limpa-la apagando alguns emails antigos ou irrelevantes. Assim, logo você terá acesso ao código. Caso o problema permaneça, entre em contato com o suporte.';
    } else if (normalizedIssue.includes('problemas') || normalizedIssue.includes('senha') || normalizedIssue.includes('dificuldades') || normalizedIssue.includes('acesso')) {
        responseText = 'Se você está tendo problemas com a senha, utilize a opção "Esqueci minha senha" na página de login para redefini-la. Se precisar de mais ajuda, entre em contato com o suporte.';
    } else if (normalizedIssue.includes('agendar') || normalizedIssue.includes('marcar')) {
        responseText = 'Para problemas com agendamento, verifique se você está selecionando a data e hora corretas. Caso o problema continue, entre em contato com o suporte para assistência.';
    } else if (normalizedIssue.includes('data') || normalizedIssue.includes('horário') || normalizedIssue.includes('informação')) {
        responseText = 'Se as informações estão certas, mas você não conseguir prosseguir, verifique as especialidades médicas disponíveis, assim como as datas, horários e locais.';
    } else if (normalizedIssue.includes('tentei') || normalizedIssue.includes('nao funcionou') || normalizedIssue.includes('não deu certo') || normalizedIssue.includes('não consegui')) {
        responseText = 'Talvez a especialidade que selecionou não esteja disponível no momento. Tente novamente com uma data diferente ou com um novo horário. Caso não consiga, entre em contato com o suporte. Estamos aqui para ajudar!';
    } else if (normalizedIssue.includes('menstruação') || normalizedIssue.includes('colicas') || normalizedIssue.includes('cólica')) {
        responseText = 'A menstruação pode causar cólicas e desconforto. Tente aplicar uma bolsa de água quente na barriga e faça exercícios leves para amenizar os sintomas, não sou humana, mas cólicas são horríveis 😖, melhoras rainha! 👑';
    } else if (normalizedIssue.includes('gravidez') || normalizedIssue.includes('meses') || normalizedIssue.includes('nausea') || normalizedIssue.includes('enjoo')) {
        responseText = 'Durante a gravidez, é normal sentir enjoo. Comer pequenas porções de alimentos secos, como biscoitos, pode ajudar a aliviar esses sintomas. Fique tranquila, tenho certeza que seu bebê vai ser lindo 😇.';
    } else if (normalizedIssue.includes('dor') || normalizedIssue.includes('forte') || normalizedIssue.includes('desconforto')) {
        responseText = 'Sintomas como dor e cansaço são comuns. Descanse bastante e considere consultar um médico se os sintomas persistirem ou forem severos.';
    } else if (normalizedIssue.includes('ansiedade') || normalizedIssue.includes('estresse') || normalizedIssue.includes('depressão') || normalizedIssue.includes('saúde mental')) {
        responseText = 'É normal sentir ansiedade ou estresse. Tente práticas de relaxamento como meditação ou yoga, e se os sentimentos persistirem, considere buscar apoio profissional. Você não está sozinha! 💕';
    } else if (normalizedIssue.includes('obrigada') || normalizedIssue.includes('tchau') || normalizedIssue.includes('valeu') || normalizedIssue.includes('até logo') || normalizedIssue.includes('grata')) {
        responseText = 'Obrigada você por conversar comigo! Lembre-se de cuidar de si mesma e, se precisar, não hesite em buscar ajuda médica. Estarei aqui se você precisar de mais alguma coisa. Até logo! 😘';
    } else if (normalizedIssue.includes('funcionou') || normalizedIssue.includes('deu certo')) {
        responseText = 'Que bom que deu certo! Se precisar de mais alguma coisa, pode me chamar! 😉';
    } else {
        responseText = 'Desculpe, não entendi. Pergunte sobre problemas de cadastro, problemas com senha, problemas de agendamento, menstruação, gravidez, saúde mental ou sintomas e eu vou tentar ajudar! 🤗';
    }

    // Adiciona a resposta do bot
    const botMessage = document.createElement('div');
    botMessage.classList.add('chat-message', 'bot');
    botMessage.textContent = responseText;
    chatResponse.appendChild(botMessage);
}
