# React Native

## O que é o React?

É a parte central, que cuida da componetização, e essa biblioteca central ela serve tanto para desenvolver aplicação para WEB(React DOM) como também aplicações para mobile(React Native).

## O que é o React Native?

Framework open source, Cross Platform(multiplataforma).
Todo código desenvolvidoéconvertido para a linguagem nativa do sistema operacional.
Conseguimos desenvolver aplicações para Android e iOS utilizando um código único.

Documentação: https://reactnative.dev.

## Como funciona o React Native?

Temos duas partes importantes em relação a uma aplicação React Native.

1° UI(User Interface): Interface Gráfica
A parte da interface gráfica é desenvolvido com o JSX, e o _JSX_ criado vai gerar componentes nativos tanto para iOS quanto para Android.
Ex.: No caso de uma _View_ JSX(no WEB é uma _div_) vai converter para o iOS em uma tag _UIView_ e para o Android em uma tag _android.View_.

2° JS(JavaScript): Lógica
A parte da lógica vai rodar dentro de hantimes JS que vão estar dentro dos dispositivos, no caso do iOS ele vai usar o _Webkit_ e no caso do Android ele vai usar o _V8_.

## Criando um emulador do celular Android no Android Studio

- Vamos em `More Actions` > `Virtual Device Manager` > `Create device` e selecionar o simulador `Pixel3` e clicar em `Next` e em seguida vai abrir uma janela para selecionarmos o a versão do sistema android que queremos usar > Após isso vai abrir uma nova janela para nomearmos esse emular, feito isso podemos clicar em `Finish`.

- Agora, temos o emulador disponível, e podemos abri-lo indo na action `play`.

## Criando um projeto 

### Iniciando um projeto com a CLI(Command Line Interface) do React Native

```
npx react-native init [nome-do-projeto]
```

- Concluindo a inicialização do projeto, vamos entrar na pasta do projeto criada e rodar o comando para inicializar o Metro Bundle(o qual vai compilar o JS e passar para o app conseguir renderizar):

```
npx react-native start
```

- Vamos deixar rodando o Metro e abrir um novo terminal no diretório do projeto e realizar a instalação do Android:

```
yarn android ou npx react-native run-android
```

### Estrutura de pastas

- **__tests__** : onde vamos conseguir rodar o nosso app e testar;
- **.bundle** : criamos um bundle para rodar no android, ele vai ser responsavel por transcrever o que está escrito no projeto para ser reconhecido no android;
- **android** : nessa pasta teremos as configurações nativas do android;
- **ios** : nessa pasta teremos as configurações nativas do ios;
- **node_modules** : pasta de dependências do javascript;
- **.buckconfig**, **.eslintrc**, **flowconfig** : arquivos de configurações;
- **prettierrc.js** : arquivo de regras de código;
- **.ruby-version** : para guardar a versão do ruby que vamos rodar no ios; 
- **.watchmanconfig** : arquivo de configuração de watch;
- **App.js** : arquivo da aplicação;
- **babel.config.js** : arquivo de configuração do babel, já vem configurado, faz compilação para as versões mais antigas do JS;
- **Gemfile**, **Gemfile.lock** : arquivos de gems para o ruby;
- **index.js** : porta de entrada da aplicação em react native, ele importa o _AppREgistry_ do react native, e usa o método _registerCompent_ que vai registrar o componente raíz da aplicação(Componente chamado App);
- **metro.config.js** : arquivo de configuração do metro bundle;
- **package.json** : arquivo de dependências JS;
- **yarn.lock** : registro das dependências instaladas no app.

### Alterando estrutura de pastas

- Na raíz do projeto vamos criar uma pasta _src_ e vamos mover o arquivo _App.js_ para dentro dela e apagar todo o conteúdo dele.

- Dentro do arquivo _index.js_ vamos alterar a referência para o arquivo App para o novo que criamos dentro de _src_:

``` JS
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

- Isso ocasionou um erro no nosso emulador android. Para resolver esse problema, dentro do novo arquivo _App.js_ vamos criar uma constante _App_ que vai receber uma arrow funcion/_() =>_ que vai retornar/_return_ vazio/_null_ e em seguida exportar por padrão/_export default_ para que esse componente fique acessível:

``` JS
const App = () => {
  return null;
};

export default App;
```

- E para deixar tudo pronto para implementação de código JSX e dos componentes do react native, vamos importá-los:

``` JS
import React from 'react';
import {} from 'react-native';

const App = () => { // podemos criar diretamente uma função chamada App também
  return null;
};

export default App;
```

### Conhecendo o JSX

É uma extensão de sintaxe para JavaScript. É recomendado usar JSX com o React para descrever como a UI deveria parecer. 
JSX pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript.
Nada mais é que código JavaScript com "cara" de HTML.

### Entendendo Sistema de Módulos do ECMAScript

#### Export

No modelo CommonJS podemos exportar valores atribuindo eles ao module.exports como no snippet abaixo:

``` JS
module.exports = 1
module.exports = NaN
module.exports = 'foo'
module.exports = { foo: 'bar' }
module.exports = [ 'foo', 'bar' ]
module.exports = function foo () {}
module.exports = () => {}
```

No ES6, os módulos são arquivos que dão `export` uma API (basicamente igual ao CommonJS). As declarações, variáveis, funções e qualquer coisa daquele módulo existem apenas nos escopos daquele módulo, o que significa que qualquer variável declarada dentro de um módulo não está disponível para outros módulos (a não ser que eles sejam exportados explicitamente como parte da API, e importados posteriormente no módulo que as usa).

#### Export padrão

Podemos simular o comportamento do CommonJS basicamente trocando o module.exports por export default:

``` JS
export default = 1
export default = NaN
export default = 'foo'
export default = { foo: 'bar' }
export default = [ 'foo', 'bar' ]
export default = function foo () {}
export default = () => {}
```

Ao contrário dos módulos no CommonJS, declarações export só podem ser colocadas no top level do código, e não em qualquer parte dele. Presumimos que essa limitação existe para tornar mais fácil a vida dos interpretadores quando vão identificar os módulos, mas, olhando bem, é uma limitação bem válida, porque não há muitas boas razões para que possamos definir exports dinâmicos dentro das funções da nossa API.

Um dos modos de ampliar sua performance é utilizando módulos, isto porque os módulos são compilados de modo estático, e antes do seu código sequer passar para o interpretador do browser (como o V8 por exemplo). Desta forma é possível extrair somente as partes do código que são realmente utilizadas na aplicação ao invés de importar o módulo todo, e isso só seria possível se os módulos fossem declarados no top level, porque qualquer coisa dentro de uma função se tornaria algo dinâmico, e não estático.

``` JS
function foo () {
    export default 'bar' // Syntax Error
}
foo()

// --- //

function foo () {
    return 'bar'
}
export default foo // OK!
```

#### Exports Nomeados

No CommonJS podemos simplesmente criar bindings de variáveis direto no `module.exports` que então teremos as propriedades sendo atualizadas em tempo real:

``` JS
module.exports.foo = 'bar'
```

Podemos replicar esse comportamento usando a sintaxe de exports nomeados. Ao invés de atribuir o valor para o module.exports, podemos declarar quaisquer variáveis que queremos exportar.

Note que o código abaixo não pode ser refatorado para extrair a declaração da variável para uma linha única (e depois usar um export foo), isto nos daria um erro de sintaxe, provando que, cada vez mais, o ES6 é a favor de análise estática ao invés de fluxos dinâmicos:

``` JS
export var foo = 'bar'
```

É importante ter em mente que estamos exportanto **bindings**, não valores.

#### Bindings. Não valores.

Um ponto importante de notar é que os módulos no ES6 não exportam valores ou referências, mas sim os **bindings** das variáveis. Isso, em prática, significa que uma variável chamada `foo`, que é exportada, vai ter um link à variável `foo` do módulo, e os valores atribuídos a elas serão sujeitos às mudanças de valores feitas em `foo`.

Se você tem um módulo `./a` como abaixo, o export de `foo` vai ser ligado a bar por 500ms e depois será alterado para `baz`:

``` JS
export var foo = 'bar'
setTimeout(() => foo = 'baz', 500)
```

#### Exportando listas

Como podemos ver abaixo, os módulos ES6 permitem que exportemos listas de membros nomeados no top level:

``` JS
var foo = 'bar'
var bar = 'foo'
export { foo, bar }
```

Se você prefere exportar alguma coisa com um nome diferente você pode usar export `{ foo as fuz }`, como abaixo:

``` JS
var foo = 'bar'
export { foo as fuz }
```

#### Melhores práticas com export

Todas essas possibilidades de exportar um módulo vão introduzir um pouco de confusão na cabeça das pessoas. Na maioria dos casos é encorajado utilizar apenas um `export default` (e fazer isso só no final do módulo). Então você pode importar a API como o nome do próprio módulo.

``` JS
var api = {
  foo: 'bar',
    baz: 'fooz'
}

export default api
```

#### Import

O import é a contraparte do export, ele pode ser usado para carregar um módulo a partir de outro.

Antes de qualquer coisa, a maneira como os módulos são carregados depende da implementação de cada lugar. No momento nenhum browser implementa um loader.

Para contornar o que foi dito acima, é possível utilizar-se de recursos como transpilers (tipo o Babel), para escrever código ES6 enquanto as equipes de desenvolvimento dos browsers se preocupam em como fazer o carregamento de módulos funcionar.

Um exemplo legal é o lodash. A linha a seguir simplesmente carrega a biblioteca do Lodash dentro do nosso módulo. No entanto, ele não cria nenhuma variável. Ele irá executar qualquer código no top level do Lodash.

``` JS
import 'lodash'
```

#### Importando padrões

No CommonJS temos uma importação utilizando o require:

``` JS
var _ = require('lodash')
```

Para importar um export default de outro módulo usando ES6 só precisamos escolher um nome. A sintaxe muda um pouco porque você não está importando o objeto em si, mas um binding. E isso torna mais fácil para ferramentas de análise:

``` JS
import _ from 'lodash'
```

#### Importando exports nomeados

A sintaxe é muito similar ao que usamos acima:

``` JS
import { map, reduce } from 'lodash'
```

É muito parecido com o destructuring assignment que temos na nova especificação.

Uma outra maneira que podemos também importar os export nomeados, é dar um alias para cada um, ou então apenas para um deles:

``` JS
import { cloneDeep as clone, map } from 'lodash'
```

#### Importando tudo

Se você quiser importar um namespace completo de um módulo. Diferente dos imports nomeados ou padrões, ele importa tudo.

Note que a sintaxe abaixo precisa vir seguida de um alias onde todos os bindings vão ser colocados. (Exports padrões vão ser colocados em alias.default):

``` JS
import * as _ from 'lodash'
```

### Componente SafeAreaView

Documentação: https://reactnative.dev/docs/safeareaview.

O objetivo de `SafeAreaView` é renderizar conteúdo dentro dos limites da área segura de um dispositivo. Atualmente, é aplicável apenas a dispositivos iOS com iOS versão 11 ou posterior.

`SafeAreaView` renderiza o conteúdo aninhado e aplica automaticamente o preenchimento para refletir a parte da visualização que não é coberta por barras de navegação, barras de guias, barras de ferramentas e outras visualizações ancestrais. Além disso, e mais importante, os preenchimentos do SafeAreaView refletem a limitação física da tela, como cantos arredondados ou entalhes da câmera (ou seja, a área da caixa do sensor no iPhone 13).

Podemos substituir a _View_ principal(igual uma div container) do nosso App pelo _SafeAreaView_

- No arquivo, _App.js_ vamos importar o componente SafeAreaView do react native:

``` JSX
import React from "react";
import { SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      
    </SafeAreaView>
  );
}

export default App;
```

### Componente Text

Documentação: https://reactnative.dev/docs/text

Um componente React para exibir texto. `Text` suporta aninhamento, estilo e manuseio de toque.

- Vamos importar o componente Text do react native e inserir o componente _Text_ dentro do componente _SafeAreaView_:

``` JSX
import React from "react";
import { SafeAreaView, Text } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <Text>Olá mundo!</Text>
    </SafeAreaView>
  );
}

export default App;
```

### Organizando Componentes

- Dentro de _src_ vamos criar uma pasta chamada _components_ e nela vamos criar um arquivo chamado Primeiro/_First_. 
E nele vamos criar um componente funcional:

``` JSX
import React from "react";
import {} from "react-native";

const First = () => {
  return (
    <Text>First Component</Text>
  );
}
```

- E dentro de _App.js_ vamos importar esse componente _First_ e referenciá-lo:

``` JSX
import React from "react";
import { SafeAreaView, Text } from "react-native";

import First from "./components/First";

const App = () => {
  return (
    <SafeAreaView>
      <Text>Olá mundo!</Text>
      <First />
    </SafeAreaView>
  );
}

export default App;
```

