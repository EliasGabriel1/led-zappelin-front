
<div class="markdown prose w-full break-words dark:prose-invert dark">
    <h1>ChatApp</h1>
    <p>Este é um componente React que implementa uma aplicação de chat em tempo real utilizando o Socket.IO. Ele possui
        um estado local (useState) para armazenar as mensagens que são enviadas e recebidas. O socket.io-client é
        importado e conectado a um servidor na porta 4000, com o qual o componente irá se comunicar.</p>
    <h2>Funcionalidades</h2>
    <ul>
        <li>O componente ChatApp permite que os usuários enviem e recebam mensagens em tempo real através do Socket.IO.
        </li>
        <li>As mensagens são armazenadas em um estado local e exibidas no componente.</li>
        <li>A cor de fundo da mensagem é alternada entre rosa e branco a cada vez que um novo remetente envia uma
            mensagem. Se a mensagem atual tiver o mesmo remetente da mensagem anterior, a cor de fundo não é alterada.
        </li>
    </ul>
    <h2>Como usar</h2>
    <ol>
        <li>Clone o repositório para o seu computador.</li>
        <li>Abra o terminal na pasta raiz do projeto e instale as dependências com o comando <code>npm install</code>.
        </li>
        <li>Inicie o servidor com o comando <code>npm run server</code>.</li>
        <li>Abra outro terminal na mesma pasta e inicie o cliente com o comando <code>npm start</code>.</li>
        <li>Abra o navegador e acesse <code>http://localhost:3000</code>.</li>
    </ol>
    <h2>API</h2>
    <h3>Funções</h3>
    <ul>
        <li><code>handleSubmit(event)</code>: é chamada quando o usuário clica no botão "Enviar" no formulário de
            entrada de mensagens. Ela envia uma mensagem para o servidor via socket.io com a mensagem digitada pelo
            usuário e, em seguida, limpa o estado local da mensagem.</li>
    </ul>
    <h3>Estado</h3>
    <ul>
        <li><code>message</code>: estado local que armazena a mensagem digitada pelo usuário.</li>
        <li><code>messages</code>: estado local que armazena todas as mensagens recebidas.</li>
    </ul>
    <h3>Dependências</h3>
    <ul>
        <li>React</li>
        <li>Socket.IO-client</li>
    </ul>
    <h2>Contribuição</h2>
    <ol>
        <li>Fork do repositório.</li>
        <li>Crie um branch para a sua nova funcionalidade (<code>git checkout -b feature/nome-da-funcionalidade</code>).
        </li>
        <li>Comite as mudanças (<code>git commit -m 'Adiciona nova funcionalidade'</code>).</li>
        <li>Envie para o seu fork (<code>git push origin feature/nome-da-funcionalidade</code>).</li>
        <li>Abra um Pull Request.</li>
    </ol>
</div>
