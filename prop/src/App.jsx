
import './App.css'
import Produto from './components/Produto'
import Titulo from './components/Titulo'
import { useState } from 'react';
function App() {
  const [inputNome, setInputNome] = useState('');
  const [inputDescricao, setInputDescricao] = useState('');
  const [inputPreco, setInputPreco] = useState('');
  const [inputPeso, setInputPeso] = useState('');
  function mudouNome(event) {
    //console.log(event)
    setInputNome(event.target.value);
  }
  function cadastrarProduto() {
    let produto = {
      nome: inputNome,
      descricao: "obj",
      preco: 0,
      peso: 0,
      id: Date.now()
    };
    //produtos.push(produto)
    setProdutos([produto, ...produtos])
    console.log(produtos);
  }
  const [produtos, setProdutos] = useState([
    { id: Date.now() + 1, nome: "Smartphone X", descricao: "Smartphone de última geração com câmera de alta qualidade.", preco: 2500.00, peso: 0.3 },
    { id: Date.now() + 2, nome: "Laptop Pro", descricao: "Laptop com processador de alta performance e design elegante.", preco: 4500.00, peso: 1.5 },
    { id: Date.now() + 3, nome: "Fone de Ouvido Bluetooth", descricao: "Fone de ouvido sem fio com cancelamento de ruído.", preco: 500.00, peso: 0.2 },
    { id: Date.now() + 4, nome: "Smartwatch Z", descricao: "Relógio inteligente com monitoramento de saúde e fitness.", preco: 800.00, peso: 0.1 },
    { id: Date.now() + 5, nome: "Câmera DSLR", descricao: "Câmera profissional com lente intercambiável e alta resolução.", preco: 3500.00, peso: 1.2 },
    { id: Date.now() + 6, nome: "Tablet Y", descricao: "Tablet com tela de alta definição e bateria de longa duração.", preco: 1800.00, peso: 0.6 },
    { id: Date.now() + 7, nome: "Caixa de Som Portátil", descricao: "Caixa de som portátil com conexão Bluetooth e som estéreo.", preco: 400.00, peso: 0.7 },
    { id: Date.now() + 8, nome: "Monitor 4K", descricao: "Monitor 4K com alta resolução e taxa de atualização rápida.", preco: 2200.00, peso: 3.2 },
    { id: Date.now() + 9, nome: "Teclado Mecânico", descricao: "Teclado mecânico com iluminação RGB e switches personalizados.", preco: 650.00, peso: 1.1 },
    { id: Date.now() + 10, nome: "Mouse Gamer", descricao: "Mouse gamer com alta sensibilidade e design ergonômico.", preco: 350.00, peso: 0.3 },
    { id: Date.now() + 11, nome: "Carregador Portátil", descricao: "Carregador portátil de alta capacidade com múltiplas portas USB.", preco: 250.00, peso: 0.4 },
    { id: Date.now() + 12, nome: "Cadeira Gamer", descricao: "Cadeira ergonômica com ajuste de altura e apoio lombar.", preco: 1200.00, peso: 15.0 },
    { id: Date.now() + 13, nome: "HD Externo 1TB", descricao: "HD externo com 1TB de armazenamento e conexão USB 3.0.", preco: 450.00, peso: 0.5 },
    { id: Date.now() + 14, nome: "Impressora Multifuncional", descricao: "Impressora multifuncional com scanner e conexão Wi-Fi.", preco: 800.00, peso: 5.0 },
    { id: Date.now() + 15, nome: "TV 55\" OLED", descricao: "TV OLED de 55 polegadas com resolução 4K e HDR.", preco: 6000.00, peso: 18.0 },
    { id: Date.now() + 16, nome: "Console de Videogame", descricao: "Console de última geração com suporte a jogos 4K.", preco: 3500.00, peso: 4.5 },
    { id: Date.now() + 17, nome: "Drone com Câmera", descricao: "Drone com câmera 4K e estabilização de imagem.", preco: 2500.00, peso: 2.0 },
    { id: Date.now() + 18, nome: "Geladeira Inox", descricao: "Geladeira em aço inox com freezer e tecnologia frost-free.", preco: 4500.00, peso: 80.0 },
    { id: Date.now() + 19, nome: "Micro-ondas Digital", descricao: "Micro-ondas digital com múltiplas funções de cozimento.", preco: 600.00, peso: 10.0 },
    { id: Date.now() + 20, nome: "Máquina de Lavar", descricao: "Máquina de lavar com capacidade de 10kg e tecnologia inverter.", preco: 3200.00, peso: 70.0 }
  ])


  let produto = {
    nome: "Cadeira de praia",
    descricao: "Uma cadeira pra usar na praia",
    preco: 33,
    peso: 10,
  }

  return (
    <>
      <Titulo texto={"Barra da Lagoa"} emoji={""} />
      {/* <Produto produto={produto} /> */}

      <div className="formCadastro">
        <h2>Cadastro de Produto</h2>

        <div className="input-container">
          <label>Nome</label>
          <input type="text" placeholder='Samrtphone'
            value={inputNome}
            onChange={mudouNome}
          />
        </div>

        <div className="input-container">
          <label>Descrição</label>
          <input type="text" placeholder='Descrição'
            value={inputDescricao}
            onChange={(event) => setInputDescricao(event.target.value)}
          />
          {inputDescricao}
        </div>

        <button onClick={cadastrarProduto}>Cadastrar</button>


      </div>

      <div className='cards'>
        {produtos.map((produto) => (
          <Produto produto={produto} key={produto.id} />
        ))}
      </div>


    </>
  )
}

export default App
