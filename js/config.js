class Config{

    constructor(){

        this.textEl = document.querySelector('textarea');
        this.buttonCriptografarEl = document.querySelector('#firstButton');
        this.buttonDecriptografarEl = document.querySelector('#secondButton');
        this.textTransitionFieldEl = document.querySelector('#textSection');
        this.divTextEl = document.querySelector('#textSection div');
        this.buttonAction();

    }

    createButton(){

            this.textTransitionFieldEl.innerHTML += `<button id='copy'>Copiar</button>`;
            this.textTransitionFieldEl.style.justifyContent = 'flex-start';
            this.textTransitionFieldEl.style.alignItems = 'flex-start';
            this.copyButton();

    }

    buttonAction(){

        this.buttonCriptografarEl.addEventListener('click', e=>{

            this.divTextEl.remove();
            this.textTransitionFieldEl.innerHTML = ` <div><p id='paragraphP' style='font-size: 23px;'>${this.criptografar()}</p></div> `;//style='word-break: break-all; overflow:auto;'
            this.createButton();
            this.textTransitionFieldEl.style.textAlign = "start";

        });

        this.buttonDecriptografarEl.addEventListener('click', e=>{

            this.divTextEl.remove();
            this.textTransitionFieldEl.innerHTML = ` <div><p id='paragraphP' style='font-size: 23px;'>${this.descriptografar()}</p></div> `;
            this.createButton();
            this.textTransitionFieldEl.style.textAlign = "start";

        });

    }

    copyButton(){

        document.querySelector('#copy').addEventListener('click', e=>{

            navigator.clipboard.writeText(document.querySelector('#textSection p').innerHTML);

        });

    }

    criptografar(){
        
        var crip = this.textEl.value.replace(/e/g, 'enter').replace(/i/g, 'imes')
        .replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

        this.textEl.value = '';
        return crip;

    }

    descriptografar(){

        var descrip = this.textEl.value.replace(/enter/g, 'e').replace(/imes/g, 'i')
        .replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

        this.textEl.value = '';
        return descrip;

    }

}

new Config();