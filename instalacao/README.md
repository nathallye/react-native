# Instalando React Native CLI Quickstart no Linux/Debian 10

Precisamos do Node, da interface de linha de comando React Native, de um JDK e do Android Studio.

## Node

Para obter o Node.js do repositório de software Debian padrão, podemos usar o `apt` gerenciador de pacotes. Primeiro, vamos atualizá-lo:

```
sudo apt update
```

Em seguida, instalar o pacote Node.js:

```
sudo apt install nodejs
```

Para verificar se a instalação foi bem-sucedida, vamos executar o `node` comando com o `-v` sinalizador para obter a versão:

```
node -v
```

```
Output
v10.24.0
```

- Vamos instalar também o `npm` gerenciador de pacotes Node.js:

```
sudo apt install npm
```

## Java Development Kit

- Vamos executar os seguintes comandos como usuário com privilégios sudo ou root para atualizar o índice de pacotes e instalar o pacote OpenJDK 11:

```
$ sudo apt update
$ sudo apt install default-jdk
```

- Quando a instalação estiver concluída, podemos verificar a versão do Java:

```
$java -version
```

```
Output
openjdk version"11.0.3"2019-04-16
Open JDK Runtime Environment(build 11.0.3+7-post-Debian-5)
Open JDK 64-Bit Server VM(build 11.0.3+7-post-Debian-5,mixed mode,sharing)
```

## Android Studio 

1. Instalando o Android Studio

No meu caso, como utilizo a máquina virtual para rodar o Debian realizo a instalação do Android Studio diretamente no Windows no site oficial.

https://developer.android.com/studio/index.html

Mas para termos o `adb` no Debian, é importante que realizemos a instalação nele também.

2. Instalando o SDK do Android

O Android Studio instala o SDK do Android mais recente por padrão. Construir um aplicativo React Native com código nativo, no entanto, requer o `Android 11 (R)` SDK em particular. SDKs Android adicionais podem ser instalados por meio do SDK Manager no Android Studio.

- Para fazer isso, vamos abrir o Android Studio, clicar no botão "More Actions" e selecionar 
"SDK Manager".

- Vamos selecionar a guia "SDK Platforms" no SDK Manager e marcar a caixa ao lado de "Show Package Details" no canto inferior direito. Vamos expandir o `Android 11 (R)` e verificar se os seguintes itens estão marcados:

```
Android SDK Platform 30 
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
```

Em seguida, na guia "SDK Tools" vamos marcar a caixa ao lado de "Show Package Details" aqui também. Vamos procurar e expandir a entrada "Android SDK Build-Tools" e verificar se a versão `30.0.2` está selecionada.

Por fim, podemos "Apply" para baixar e instalar o Android SDK e as ferramentas de compilação relacionadas.

3. Configurando a variável de ambiente ANDROID_SDK_ROOT

As ferramentas React Native exigem que algumas variáveis ​​de ambiente sejam configuradas para criar aplicativos com código nativo.

- Vamos adicione as seguintes linhas ao arquivo de configuração `HOME/.bash_profile` ou `$HOME/.bashrc`(se estiver usando `zsh` então `~/.zprofile` ou `~/.zshrc`):

``` 
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

- É bom nos certificarmos de usar o caminho correto do Android SDK. Podemos encontrar a localização real do SDK na caixa de diálogo "Preferences" do Android Studio, em **Appearance & Behavior** → **System Settings** → **Android SDK**.
