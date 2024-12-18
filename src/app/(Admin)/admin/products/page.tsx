'use client'
import './styles.css';

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    ativo: "ATIVO",
    nome: "Bonsai de Cereja",
    url: "cereja-3dd57a5c",
    uuid: "3dd57a5c-d856-4b46-b62f-b1c8a231293e",
    descricao: "Cereja para bolos, sorvetes e outras coisas. Cereja fodastica muito boa mesmo colorida e gostosa.",
    preco: "200,00",
    categoria: "Frutifera",
    sol: "8",
    sol_desc: "Bastante sol, de preferencia deve ficar na frente de uma janela.",
    agua: "7",
    agua_desc: "Agua consideravel, molhar 200ml a cada 3 dias e deixar longe de chuva",
    tamanho: "4",
    tamanho_desc: "Pequena",
    poda: "9",
    poda_desc: "Poda diaria",
    solo: "6",
    solo_desc: "Solo simples mas precisa de alguns minerios especificos. Magnesio e fluoreto de potassio.",
    delicadeza: "6",
    delicadeza_desc: "Nao muito delicada, mas sempre bom tomar cuidado, principalmente se tiver gatos, ja que gatos gostam de comer cereja.",
  },
  {
    "key": "2",
    "ativo": "ATIVO",
    "nome": "Bonsai de Figueira",
    "url": "figueira-4ef1a7b2",
    "uuid": "4ef1a7b2-e9d4-4690-bc67-bcfcb96f2358",
    "descricao": "Essa figueira é como um super-herói disfarçado de planta. É ótima para desestressar e faz um figo tão gostoso que dá vontade de abrir uma barraquinha na esquina!",
    "preco": "150,00",
    "categoria": "Frutifera",
    "sol": "6",
    "sol_desc": "Um sol mediano, nada de torrar, senão ela fica brava e dá aquela murchada.",
    "agua": "5",
    "agua_desc": "Molhe com carinho, cerca de 150ml a cada 4 dias. E lembre-se: nada de chuveiro, ok?",
    "tamanho": "5",
    "tamanho_desc": "Média",
    "poda": "7",
    "poda_desc": "Poda semanal, mas cuidado! Não corte os galhos que estão fazendo uma pose de artista.",
    "solo": "7",
    "solo_desc": "Solo que gosta de ser mimado, precisa de um pouco de adubo de vez em quando. Olha só, ela não é exigente, mas gosta de luxo!",
    "delicadeza": "5",
    "delicadeza_desc": "Não é muito delicada, mas pode ficar chateada se a tratarmos mal. Não é de se brincar, viu?"
},
{
    "key": "3",
    "ativo": "ATIVO",
    "nome": "Bonsai de Oliveira",
    "url": "oliveira-1ab53cd7",
    "uuid": "1ab53cd7-3f0b-4e8a-abe0-d7e1a30bc9f2",
    "descricao": "O azeite da sua vida! Essa oliveira traz um toque mediterrâneo, perfeito para o seu canto da sala e para aqueles momentos de sofisticação.",
    "preco": "300,00",
    "categoria": "Frutifera",
    "sol": "7",
    "sol_desc": "Sol, sol e mais sol! Se não, as azeitonas ficam com raiva e podem não crescer. Não é brincadeira.",
    "agua": "6",
    "agua_desc": "Dê uma beija-água de 100ml a cada 5 dias, mas não se empolgue! Ela é seca como o deserto de Sahara.",
    "tamanho": "6",
    "tamanho_desc": "Média",
    "poda": "8",
    "poda_desc": "Poda a cada 15 dias. Ela adora um penteado novo, então aproveite para dar aquela ajeitada!",
    "solo": "8",
    "solo_desc": "Solo bem drenado, do tipo que adora ver a água escorrendo. Um solo feliz é uma oliveira feliz!",
    "delicadeza": "4",
    "delicadeza_desc": "Resiliente como um guerreiro, essa oliveira não se abala facilmente. Mas, hey, é sempre bom dar um carinho de vez em quando!"
},
{
    "key": "4",
    "ativo": "ATIVO",
    "nome": "Bonsai de Pinheiro",
    "url": "pinheiro-2bc67ef8",
    "uuid": "2bc67ef8-b52f-429b-b1c7-2c7d4cce9e18",
    "descricao": "Se você quer um amigo que esteja sempre na sua, esse pinheiro é o cara! Ele é tão resistente que só falta falar e te dar conselhos sobre a vida.",
    "preco": "100,00",
    "categoria": "Conifera",
    "sol": "5",
    "sol_desc": "Um sol leve, se não ele fica com a cara de quem levou um soco. Um pouco de sombra é sempre bem-vindo!",
    "agua": "4",
    "agua_desc": "Molhe 200ml a cada 7 dias. O pinheiro gosta de um bom banho, mas não exagere! Não queremos um maremoto.",
    "tamanho": "7",
    "tamanho_desc": "Grande",
    "poda": "6",
    "poda_desc": "Poda a cada 3 meses. Um galho aqui, outro ali, e ele estará pronto para a próxima competição de beleza!",
    "solo": "6",
    "solo_desc": "Solo bem drenado, porque o pinheiro não curte um pé d'água. Ele é fã de montanha, não de lago!",
    "delicadeza": "3",
    "delicadeza_desc": "Super resistente! Pode enfrentar um furacão, mas se alguém passar muito perto, pode ficar nervoso. Então, cuidado!"
},
{
    "key": "5",
    "ativo": "ATIVO",
    "nome": "Bonsai de Maple",
    "url": "maple-8de73a5e",
    "uuid": "8de73a5e-f567-49a2-babc-b8e7f8d47a62",
    "descricao": "Um verdadeiro espetáculo no outono! Esse maple vai fazer você querer fazer uma dança da chuva só para ver suas folhas mudarem de cor.",
    "preco": "250,00",
    "categoria": "Decídua",
    "sol": "6",
    "sol_desc": "Um sol generoso, mas sem exageros! Se você deixar muito tempo no sol forte, ele pode acabar mais vermelho que o tomate.",
    "agua": "5",
    "agua_desc": "Hidratação leve, cerca de 150ml a cada 5 dias. Ele gosta de manter a compostura, mas não está de dieta!",
    "tamanho": "5",
    "tamanho_desc": "Média",
    "poda": "8",
    "poda_desc": "Poda a cada 4 semanas. Ele adora uma boa aparada, como se estivesse se preparando para um desfile de moda!",
    "solo": "7",
    "solo_desc": "Solo bem drenado, e se você colocar uma camada de folhas secas, ele vai adorar como um cobertor quentinho.",
    "delicadeza": "5",
    "delicadeza_desc": "Meio delicado, mas se você prometer cuidar dele, ele vai te dar muitas alegrias! Prepare-se para a beleza!"
},
{
    "key": "6",
    "ativo": "ATIVO",
    "nome": "Bonsai de Eucalipto",
    "url": "eucalipto-1fe9b6c2",
    "uuid": "1fe9b6c2-6c93-4a67-a7b6-98c1b9f6e4c3",
    "descricao": "O eucalipto que te lembra do seu último resfriado. Mas não se preocupe, ele também é um ótimo aromatizador natural e traz frescor ao ambiente!",
    "preco": "120,00",
    "categoria": "Arbórea",
    "sol": "7",
    "sol_desc": "Seja generoso com a luz! Esse cara ama o sol e fica triste em ambientes escuros.",
    "agua": "5",
    "agua_desc": "Água moderada! 150ml a cada 5 dias é o ideal. Ele não precisa de um banho, mas um copo d’água é sempre bem-vindo.",
    "tamanho": "8",
    "tamanho_desc": "Grande",
    "poda": "6",
    "poda_desc": "Poda a cada 2 meses. Ele não se importa com a aparência, mas você deve fazer isso se não quiser um verdadeiro matagal na sua sala!",
    "solo": "7",
    "solo_desc": "Solo drenado e rico em nutrientes! Se você achar que ele está falando, pode ser a sua imaginação.",
    "delicadeza": "4",
    "delicadeza_desc": "Resiliente! Ele já enfrentou uma tempestade ou duas, então não se preocupe se você esquecer de regá-lo uma vez ou outra."
},
{
    "key": "7",
    "ativo": "ATIVO",
    "nome": "Bonsai de Limoeiro",
    "url": "limoeiro-5ad9f3a1",
    "uuid": "5ad9f3a1-1d04-4ed0-b1e4-04e8a7e302d8",
    "descricao": "Um limoeiro que não só dá limões, mas também os melhores conselhos para sua vida. 'Siga seu caminho e não se esqueça do açúcar!'",
    "preco": "180,00",
    "categoria": "Frutifera",
    "sol": "6",
    "sol_desc": "Um sol modesto, mas não o deixe na sombra! Se ele não brilhar, você não vai ter limões na sua vida.",
    "agua": "6",
    "agua_desc": "Regue com cerca de 200ml a cada 4 dias. E lembre-se: nada de limonada com água demais!",
    "tamanho": "4",
    "tamanho_desc": "Pequena",
    "poda": "7",
    "poda_desc": "Poda a cada 6 semanas. Ele gosta de um bom visual, mas cuidado: ele não quer parecer um limoeiro espinhento.",
    "solo": "6",
    "solo_desc": "Solo bem drenado e ácido! Se você não tem o que fazer, jogue um pouco de casca de limão e veja a mágica acontecer.",
    "delicadeza": "5",
    "delicadeza_desc": "Meio delicado, mas não tão delicado quanto você imagina. Ele aguenta as agruras da vida, assim como você!"
},
{
    "key": "8",
    "ativo": "ATIVO",
    "nome": "Bonsai de Hibisco",
    "url": "hibisco-7fe8c3d9",
    "uuid": "7fe8c3d9-58d2-414c-99b7-df78dce1e028",
    "descricao": "O hibisco que vai deixar sua casa tão colorida que você vai achar que está vivendo em um arco-íris! Cuidado, pois ele também pode atrair unicórnios.",
    "preco": "220,00",
    "categoria": "Floricultura",
    "sol": "5",
    "sol_desc": "Um sol leve e alegre. Ele não gosta de excessos, mas também não quer ficar na sombra da sua planta de plástico.",
    "agua": "5",
    "agua_desc": "Regue com 150ml a cada 4 dias. Ele adora água, mas não um banho completo, senão ele fica tão molhado que vai se transformar em um peixe.",
    "tamanho": "6",
    "tamanho_desc": "Média",
    "poda": "8",
    "poda_desc": "Poda mensal! Ele gosta de um corte estiloso, como se estivesse indo a uma festa.",
    "solo": "6",
    "solo_desc": "Solo bem drenado e rico em matéria orgânica! Jogue uma pitada de carinho e veja-o florescer!",
    "delicadeza": "5",
    "delicadeza_desc": "Meio delicado, mas se você tratar com amor, vai ter flores lindas para enfeitar sua casa!"
},
{
    "key": "9",
    "ativo": "ATIVO",
    "nome": "Bonsai de Suculenta",
    "url": "suculenta-2da3a4e6",
    "uuid": "2da3a4e6-85b1-4d2b-8390-12f2d3e3e58c",
    "descricao": "Uma suculenta que não precisa de muito amor, só um pouco de atenção. Ela é a amiga que não liga se você não a chama para sair, mas quando você a chama, ela aparece!",
    "preco": "90,00",
    "categoria": "Suculenta",
    "sol": "6",
    "sol_desc": "Um sol leve. Não a deixe no escuro, senão ela vai começar a te ignorar.",
    "agua": "4",
    "agua_desc": "Água moderada! 100ml a cada 7 dias. Se você regar demais, ela vai ficar tão inchada que vai parecer que foi à festa de formatura.",
    "tamanho": "3",
    "tamanho_desc": "Pequena",
    "poda": "2",
    "poda_desc": "Sem poda necessária! A menos que você queira que ela esteja mais chique para o próximo encontro.",
    "solo": "7",
    "solo_desc": "Solo leve e arenoso. Se você não tiver, uma areia de praia já serve! É como um dia de verão para ela.",
    "delicadeza": "3",
    "delicadeza_desc": "Robusta! Pode sobreviver até em um apocalipse zumbi se tiver água suficiente!"
},
{
    "key": "10",
    "ativo": "ATIVO",
    "nome": "Bonsai de Cacto",
    "url": "cacto-4cd5f9e7",
    "uuid": "4cd5f9e7-1eae-4e08-b5d3-97324b4a7046",
    "descricao": "Um cacto que não dá agulhas de forma nenhuma, só boas vibrações! Perfeito para quem é fã de desertos e aventuras. Cuidado, ele é a prova de balas!",
    "preco": "80,00",
    "categoria": "Cactaceae",
    "sol": "8",
    "sol_desc": "Esse cara ama o sol! Se não tiver luz suficiente, ele vai ficar tão triste quanto uma criança sem sobremesa.",
    "agua": "2",
    "agua_desc": "Pouca água! Regue com 50ml a cada 10 dias. Ele é fã de um clima árido, quase como um eremita.",
    "tamanho": "5",
    "tamanho_desc": "Média",
    "poda": "1",
    "poda_desc": "Sem poda necessária! Se ele começar a ficar desleixado, apenas olhe para ele e diga: 'Cacto, vamos lá!'",
    "solo": "6",
    "solo_desc": "Solo arenoso e bem drenado. Se você não tiver isso, use terra de praia. Ele adora férias!",
    "delicadeza": "2",
    "delicadeza_desc": "Super resistente! O cacto é como aquele amigo que sempre está lá, não importa o que aconteça."
},
{
    "key": "11",
    "ativo": "ATIVO",
    "nome": "Bonsai de Orquídea",
    "url": "orquidea-8ef8f3c2",
    "uuid": "8ef8f3c2-c6e1-4b30-b4f2-2e9642f1be57",
    "descricao": "A orquídea mais chique do pedaço! Ela é como a diva da sua coleção de plantas e está sempre pronta para o próximo evento.",
    "preco": "250,00",
    "categoria": "Floricultura",
    "sol": "5",
    "sol_desc": "Um sol suave, como um carinho no rosto. Não deixe o sol forte demais, senão ela pode desmaiar!",
    "agua": "5",
    "agua_desc": "Regue com 100ml a cada 5 dias. Ela gosta de um pouquinho de água, mas não um dilúvio!",
    "tamanho": "4",
    "tamanho_desc": "Pequena",
    "poda": "6",
    "poda_desc": "Poda a cada 3 meses. Dê a ela o visual de uma verdadeira estrela!",
    "solo": "7",
    "solo_desc": "Solo especial para orquídeas! Se não tiver, uma mistura de cascas de árvores pode fazer o truque.",
    "delicadeza": "5",
    "delicadeza_desc": "Meio delicada, mas com um toque de glamour! Trate-a como uma estrela de Hollywood e ela vai brilhar!"
},
{
    "key": "12",
    "ativo": "ATIVO",
    "nome": "Bonsai de Pimenteira",
    "url": "pimenteira-3bafc8f3",
    "uuid": "3bafc8f3-2b4c-4c51-9bc8-2b0c2af2c8e6",
    "descricao": "A pimenteira que é como o tempero da sua vida! Adicione um pouco de emoção e cuidado, e você terá pratos picantes à disposição.",
    "preco": "150,00",
    "categoria": "Frutifera",
    "sol": "6",
    "sol_desc": "Ela gosta de sol, mas um pouco de sombra à tarde não faz mal. É como a rotina perfeita: trabalho e lazer!",
    "agua": "6",
    "agua_desc": "Regue com 200ml a cada 4 dias. Não deixe a pimenteira muito seca, a não ser que você queira um tempero mais forte.",
    "tamanho": "5",
    "tamanho_desc": "Média",
    "poda": "6",
    "poda_desc": "Poda a cada 2 meses. Dê uma ajustada, porque ela não quer parecer um arbusto de pimenta maluca!",
    "solo": "7",
    "solo_desc": "Solo rico e bem drenado! Se você tiver um pouco de terra de jardim, ela vai amar.",
    "delicadeza": "4",
    "delicadeza_desc": "Resiliente! Essa pimenteira é como um verdadeiro guerreiro na cozinha."
},
{
    "key": "13",
    "ativo": "ATIVO",
    "nome": "Bonsai de Araucária",
    "url": "araucaria-9cd4b1b3",
    "uuid": "9cd4b1b3-bc41-4e38-bf44-6d0f4d404f64",
    "descricao": "A araucária que traz a majestade das florestas para dentro da sua casa! Ela é como uma rainha no trono, mas só se você lembrar de regá-la.",
    "preco": "300,00",
    "categoria": "Arbórea",
    "sol": "6",
    "sol_desc": "Sol moderado! Não a deixe sob a luz direta o dia todo, a não ser que você queira uma araucária grelhada.",
    "agua": "5",
    "agua_desc": "Água suficiente! 200ml a cada 6 dias. E sim, ela não vai se transformar em um lago se você fizer isso!",
    "tamanho": "7",
    "tamanho_desc": "Alta",
    "poda": "6",
    "poda_desc": "Poda a cada 6 meses! Não a deixe crescer como um monstro, a não ser que você queira um lar para hobbits.",
    "solo": "8",
    "solo_desc": "Solo rico e bem drenado! Ela gosta de um pouco de carinho na terra.",
    "delicadeza": "5",
    "delicadeza_desc": "Meio resistente, mas se você esquecer de cuidar dela, pode ficar tão triste que vai parecer uma árvore de Natal sem enfeites."
}

];

const columns = [
  {
    key: "ativo",
    label: "Ativo",
  },
  {
    key: "nome",
    label: "Nome",
  },
  {
    key: "url",
    label: "URL",
  },
  {
    key: "uuid",
    label: "UUID",
  },
  {
    key: "descricao",
    label: "Descricao",
  },
  {
    key: "preco",
    label: "Preco",
  },
  {
    key: "categoria",
    label: "Categoria",
  },
  {
    key: "sol",
    label: "Sol",
  },
  {
    key: "sol_desc",
    label: "Sol Descricao",
  },
  {
    key: "agua",
    label: "Agua",
  },
  {
    key: "agua_desc",
    label: "Agua Descricao",
  },
  {
    key: "tamanho",
    label: "Tamanho",
  },
  {
    key: "tamanho_desc",
    label: "Tamanho Descricao",
  },
  {
    key: "poda",
    label: "Poda",
  },
  {
    key: "poda_desc",
    label: "Poda Descricao",
  },
  {
    key: "solo",
    label: "Solo",
  },
  {
    key: "solo_desc",
    label: "Solo Descricao",
  },
  {
    key: "delicadeza",
    label: "Delicadeza",
  },
  {
    key: "delicadeza_desc",
    label: "Delicadeza Descricao",
  },
];

export default function App() {
    return (
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key} className="table-row">
              {(columnKey) => (
                <TableCell className="table-cell">
                  {getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }