import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'

import LogoEasymine from '../../assets/LogoEasymine.png'

export default function Home() {

  return (
    <>
      <div className="min-h-full bg-slate-800">
        
        <NavBar />

        <main className='pt-12 font-serif'>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <h1 className='text-white text-2xl mb-2 font-bold'>O que é uma Gestão Estratégica de TI?</h1>
              <div className="border-2 border-[#28edf5] border-solid bg-slate-300 shadow-md shadow-black rounded-lg sm:h-min">
                <p className='mx-2 mt-2 text-black indent-8 md:indent-4 sm:indent-4 leading-relaxed whitespace-pre-line break-words mb-4'>
                A gestão estratégica é um conjunto de práticas aplicadas na administração de uma empresa, departamento e até mesmo de projetos, 
                em que os processos são estruturados de forma eficaz para atingir os objetivos traçados pela organização. Por meio dela, 
                todas as tarefas são executadas em cima de direcionamentos previamente estabelecidos, ajudando a impulsionar a competitividade e o crescimento do negócio.  
                <br/><p>A gestão de TI é definida por todas as práticas voltadas para a administração dos recursos e soluções de tecnologia de uma empresa.
                Quando o gerenciamento é pensado e feito de forma estratégica ele assume condutas de governança sobre as ferramentas da área com o objetivo de melhorar os resultados da companhia.  
                </p>
                <p>O TI estratégico consegue direcionar as ações para maior economia de recursos e eficiência integral das equipes, 
                podendo promover a geração de incremento de vendas, melhoria de serviços, produtos, atendimento e diversos outros benefícios. 
                Com profissionais engajados e capacitados, sobrepujando práticas de apenas fornecer suporte, recursos ou ferramentas, 
                é possível que o setor de TI se torne um ativo importante para os projetos da companhia. 
                Para isso, é necessário que os objetivos da área estejam em consonância com os da instituição.</p>
                <br/>
                Fonte: <a class="text-sky-400 hover:after:content-['_↗'] ..." href="https://www.findup.com.br/gestao-de-ti-estrategica/" target="_blank">https://www.findup.com.br/gestao-de-ti-estrategica/</a>
                </p>
              </div>
              <h1 className='text-white text-2xl mt-8 mb-2 font-bold'>Resenha sobre Gestão Estratégica de TI</h1>
              <div className="border-2 border-[#28edf5] border-solid bg-slate-300 shadow-md shadow-black rounded-lg sm:h-min">
                <p className='mx-2 mt-2 mb-4 text-black indent-8 md:indent-4 sm:indent-4 leading-relaxed'>
                  Gestão estratégica é um assunto muito importante no mercado atual, o mesmo aborda a importância da gestão do conhecimento utilizando ferramentas que a TI pode oferecer. 
                  O mundo está passando por uma evolução da tecnologia muito rápido, em uma grande escala, e para o crescimento das empresas hoje em dia tornou-se muito importante,
                  juntamente com a gestão pode-se obter um lucro muito interessante aos empreendedores.

                </p>
              </div>
              <h1 className='text-white text-2xl mt-8 mb-2 font-bold' id='beneficio'>Quais benefícios da Gestão Estratégica de TI?</h1>
              <div className="border-2 border-[#28edf5]  border-solid bg-slate-300 shadow-md shadow-black rounded-lg sm:h-min">
                <p className='mx-2 mt-2 mb-4 text-black indent-8 md:indent-4 sm:indent-4 leading-relaxed'>
                  <ul>
                    <li className='font-bold text-lg'>Redução de custos</li>
                    <p>
                    Com o setor de TI estratégico atuando, é possível reduzir custos de várias formas. 
                    Uma delas é ao realizar investimentos em novos equipamentos. 
                    Em vez de comprar um padrão para todos, a área primeiro analisa a usabilidade de cada colaborador, 
                    define o perfil de hardware necessário e, apenas depois disso, os equipamentos são comprados. 
                    Desse modo, as necessidades de uso e performance são garantidas, mas com uma necessidade de investimento consideravelmente menor.
                    </p><br/>
                    <li className='font-bold text-lg'>Acompanhamento de inovação do mercado</li>
                    <p>
                    Com o departamento de TI tendo maior liberdade e tomando parte das decisões mais importantes da empresa, 
                    a área terá obrigação de estar inteirada com as inovações do mercado. 
                    Esse conhecimento será importante para que o departamento consiga oferecer um terreno sólido para que os outros setores possam aumentar a taxa de sucesso de suas decisões.
                    Com profissionais alinhados às tendências e às novas tecnologias, a TI Estratégica poderá apontar propostas e caminhos para a empresa, como:
                    <ul className='list-inside list-disc'>
                      <li>quais produtos abandonar</li>
                      <li>áreas que devem receber mais investimento para inovação</li>
                      <li>como e onde se comunicar com o público</li>
                    </ul>
                    </p><br/>
                    <li className='font-bold text-lg'>Garantia de um ambiente seguro</li>
                    <p>
                    Depois dos colaboradores, a informação é um dos fatores mais preciosos para qualquer organização. 
                    É por esse motivo que a segurança é uma das principais responsabilidades da TI estratégia. 
                    Eles são responsáveis por homologar os softwares utilizados, gerir as permissões de acesso e treinar as equipes.
                    </p><p>
                    Com essas e outras ações, eles garantem a consolidação de um ambiente seguro para a troca de informações e 
                    atuam de forma preventiva para que a empresa não tenha as suas operações interrompidas ou seus dados roubados.
                    </p><br/>
                    <li className='font-bold text-lg'>Melhor monitoramento das equipes</li>
                    <p>
                    Como dito por William Edwards Deming: “Não há sucesso no que não se gerencia”, 
                    e um dos principais fatores para o gerenciamento eficaz é o monitoramento. É para suprir essa necessidade que uma TI Estratégica pode ser um grande diferencial.
                    </p><p>
                    Só o departamento de tecnologia é capaz de criar e implementar ferramentas que melhorem e facilitem o monitoramento das equipes de forma ampla e concreta. 
                    Além disso, tendo a sua capacidade produtiva aumentada, o setor de TI poderá oferecer dados mais coesos das equipes.
                    </p><br/>
                    <li className='font-bold text-lg'>Geração de Sinergia entre as áreas</li>
                    <p>
                    Como a TI estratégica está diretamente ligada ao planejamento corporativo, todas as áreas poderão usufruir dos seus benefícios. 
                    Além disso, o cruzamento das informações pode gerar insights relevantes, aumentar a colaboração entre as áreas e, por meio da sinergia, alavancar os resultados.
                    </p><br/>
                    <li className='font-bold text-lg'>Desenvolvimento de uma cultura de inovação</li>
                    <p>
                    A empresa que aplica a TI estratégica incute nos seus colaboradores uma cultura de inovação e melhoria contínua, 
                    além de mostrar que a sua atividade agrega valor para toda a sociedade. Esse fato é muito relevante, 
                    pois colaboradores com propósito produzem mais, são muito comprometidos e permanecem mais tempo na empresa.
                    </p><p>
                    E os benefícios não ficam apenas dentro da empresa. Outra vantagem da cultura da inovação é ganhar uma legião de fãs 
                    que aguardam ansiosamente pelos lançamentos de novos produtos e serviços, que geralmente são vendidos por preços mais elevados, 
                    pois o cliente considera o valor agregado muito maior que o preço.
                    </p><p>
                    A TI estratégica é essencial para as organizações que desejam alavancar os seus resultados. 
                    Por isso, deve estar diretamente ligada à estratégia de negócios e interagir com todas as áreas da empresa. 
                    Se bem implantada, poderá melhorar os processos, reduzir custos, otimizar a comunicação, melhorar o nível de serviço, 
                    atrair novos cliente e aumentar a rentabilidade da empresa.
                    </p><br/>
                    Fonte: <a class="text-sky-400 hover:after:content-['_↗'] ..." href="https://blog.centralserver.com.br/o-que-e-ti-estrategica-e-quais-suas-vantagens-para-sua-empresa/" target="_blank">https://blog.centralserver.com.br/o-que-e-ti-estrategica-e-quais-suas-vantagens-para-sua-empresa/</a>
                  </ul>
                </p>
              </div>
              <h1 className='text-white text-2xl mt-8 mb-2 font-bold' id='entrevista'>Entrevista com Geraldo Dutra (Co-Fundador da Instale Tecnologia) - Gestor de TI</h1>
              <img className='w-96' src={LogoEasymine}></img>
              <div className="border-2 border-[#28edf5]  border-solid bg-slate-300 shadow-md shadow-black rounded-lg mt-4 sm:h-min">
                <p className='mx-2 mt-2 text-black leading-relaxed'> 
                  <li className='font-bold text-lg'>Quais são as maiores dificuldades sendo Gestor de TI?</li>
                  <p className='mx-2 mt-2 mb-4 text-black indent-8 md:indent-4 sm:indent-4 leading-relaxed'>
                    - "O maior desafio de um gestor de t.i. está em não deixar o seu produto ou projeto ficar defasado, 
                    então para isso ele depende exclusivamente tá por dentro das tecnologias, o que se encaixa também nos desafios em gerir o time. 
                    E fazer um time assim é uma é uma linha que tem que ser cruzado entre gerir o time e preparar ele se para serem totalmente alto suficiente também, 
                    então você só modela o time. Você vai organizando as ideias de acordo com a estratégia da empresa mas você tem que estar sempre instigando o time 
                    a poder evoluir, poder aprender, e encaixar no momento certo os projetos."
                  </p><br/>
                  <li className='font-bold text-lg'>Qual o desafio de um Gestor de TI?  </li>
                  <p className='mx-2 mt-2 mb-4 text-black indent-8 md:indent-4 sm:indent-4 leading-relaxed'>
                    - "A gestão de TI ela fica complexa de acordo como uma empresa cresce e a dificuldade de entender essas demandas de acordo 
                    com a atualização do mercado, das ferramentas na evolução da tecnologia e você encaixar ela dentro da sua empresa, 
                    nos seus produtos e nos seus projetos mas principalmente ir acompanhando e evoluindo as pessoas para integrarem isso, 
                    porque não é só uma questão de mapear os processos ou usar uma tecnologia nova, por exemplo uma migração de tecnologia. 
                    A ideia também é você poder qualificar as pessoas para poder acompanhar nisso e essa dificuldade está em saber o que fazer na hora certa, 
                    capacitar as pessoas e saber migrar pouco a pouco."
                  </p><br/>
                  <li className='font-bold text-lg'>O que é importante para manter um bom desempenho da equipe?</li>
                  <p className='mx-2 mt-2 mb-4 text-black indent-8 md:indent-4 sm:indent-4 leading-relaxed'>
                    - "Manter um bom desempenho é ter os processos mapeados e muito bem organizados, dar as ferramentas necessárias para o pessoal e tá sempre direcionando 
                    eles a estudarem e capacitar dentro das estratégias de tecnologia da sua empresa, porque nem sempre há uma tecnologia que se encaixa naquela 
                    empresa naquele momento, mas você tem que preparar a base bem feita com treinamento e acompanhamento dessas pessoas também para poder obter um 
                    bom desempenho. E principalmente melhorar a comunicação, para isso tem varias ferramentas, mas a comunicação da equipe é o essencial para manter um bom desempenho."
                  </p><br/>
                  <li className='font-bold text-lg'>Como foi sua trajetória junto com a empresa?</li>
                  <p className='mx-2 mt-2 mb-4 text-black indent-8 md:indent-4 sm:indent-4 leading-relaxed'>
                    - "Sou um dos fundadores, a empresa vai fazer 17 anos agora no ano que vem em Janeiro 2023, a minha trajetória foi desde o começo como organizar, 
                    fazer um plano de negócio da empresa e até o momento que ela foi crescendo, sempre acompanhando ali na parte executiva, como estratégia da 
                    empresa e atuando também na gestão de TI, e também operacionalmente. Eu ainda tenho uma parte operacional na TI, principalmente com P&D, 
                    desenvolvimento de alguns itens mas chega a ser mais para evolução da tecnologia e acompanhamento. A parte operacional mesmo fica com a equipe. 
                    Eu sempre tive junto aí ajudando os sócios e os colaboradores tendo uma visão estratégica melhor da empresa direcionando para as áreas e poder 
                    executar essa visão de acordo com a demanda que vai surgindo."
                  </p><br/>
                  <li className='font-bold text-lg'>Quais são os planos para o futuro?</li>
                  <p className='mx-2 mt-2 mb-4 text-black indent-8 md:indent-4 sm:indent-4 leading-relaxed'>
                    - "É estudar muito ainda né, porque tudo muda muito rápido e a gente com 17 anos de empresa nós temos que estar muito ligado,  
                    sempre antenado e tá sempre estudando, estando capacitando melhor aí as pessoas também, e melhorando os processos para nós não estar defasado no 
                    mercado e poder evoluir nossa tecnologia constante para poder tá atendendo nossos clientes. Hoje em dia isso aí é essencial estar sempre atualizado, 
                    e manter a cabeça no lugar de fazer ações na hora certa, para não dar um passo maior que a perna também, e esses são os planos para o futuro e ter 
                    visão de bastante crescimento ainda para gente."
                  </p>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />        

      </div>
    </>
  )
}