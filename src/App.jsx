import React from 'react';

// --- Componente 1: ExemploJSX ---
// Componente simples para exibir o título e a descrição do sistema YOUVISA.
const ExemploJSX = () => {
  return (
    <div className="text-center p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-blue-600">YOUVISA</h1>
      <p className="text-slate-600 mt-2">
        Simplificando o seu processo de visto para o mundo.
      </p>
    </div>
  );
};

// --- Componente 2: RelatorioCliente ---
// Utiliza props para exibir dados dinâmicos de clientes.
// A estilização inline foi aplicada aqui, conforme solicitado no challenge.
const RelatorioCliente = ({ nome, statusVisto, pais, dataSolicitacao }) => {
  // Estilo dinâmico para o status do visto
  const statusStyle = {
    padding: '4px 12px',
    borderRadius: '12px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: statusVisto === 'Aprovado' ? '#22c55e' : (statusVisto === 'Em Análise' ? '#f59e0b' : '#ef4444'),
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-slate-800">{nome}</h3>
      <div className="mt-4 space-y-2">
        <p className="text-slate-600">
          <strong>País de Destino:</strong> {pais}
        </p>
        <p className="text-slate-600">
          <strong>Data da Solicitação:</strong> {dataSolicitacao}
        </p>
        <div className="flex items-center gap-2">
          <strong className="text-slate-600">Status:</strong>
          {/* Aplicando o estilo inline */}
          <span style={statusStyle}>{statusVisto}</span>
        </div>
      </div>
    </div>
  );
};

// --- Componente 3: ListaServicos ---
// Utiliza .map() para renderizar uma lista de serviços disponíveis.
const ListaServicos = () => {
  const servicos = [
    'Solicitação de Visto de Turista',
    'Solicitação de Visto de Estudante',
    'Acompanhamento de Documentos',
    'Renovação de Passaporte',
    'Consultoria de Imigração',
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Nossos Serviços</h2>
      <ul className="list-disc list-inside space-y-2">
        {servicos.map((servico, index) => (
          <li key={index} className="text-slate-700">
            {servico}
          </li>
        ))}
      </ul>
    </div>
  );
};


// --- Componente Principal: App ---
// Organiza todos os outros componentes na página.
export default function App() {
  // Dados mocados para os clientes, simulando uma chamada de API.
  const clientes = [
    { id: 1, nome: 'Ana Silva', statusVisto: 'Aprovado', pais: 'Canadá', dataSolicitacao: '15/07/2024' },
    { id: 2, nome: 'Bruno Costa', statusVisto: 'Em Análise', pais: 'Estados Unidos', dataSolicitacao: '28/08/2024' },
    { id: 3, nome: 'Carla Dias', statusVisto: 'Pendente', pais: 'Austrália', dataSolicitacao: '10/09/2024' },
  ];

  return (
    <main className="min-h-screen font-sans p-4 sm:p-8 bg-slate-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <ExemploJSX />

        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Painel de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientes.map(cliente => (
              <RelatorioCliente
                key={cliente.id}
                nome={cliente.nome}
                statusVisto={cliente.statusVisto}
                pais={cliente.pais}
                dataSolicitacao={cliente.dataSolicitacao}
              />
            ))}
          </div>
        </div>
        
        <ListaServicos />
      </div>
    </main>
  );
}
