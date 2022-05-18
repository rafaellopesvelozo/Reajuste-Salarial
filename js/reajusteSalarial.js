let form = document.getElementById('form');


//cx salario
let cxSalario = document.getElementById('salario');


//btn
let btnEnviar = document.getElementById('btnEnviar');
let btnLimpar = document.getElementById('btnLimpar');


//saldo
let salarioAntesReajuste = document.getElementById('salarioAntesReajuste');
let percentualAumentado = document.getElementById('percentualAumentado');
let valorAumento = document.getElementById('valorAumento');
let novoSalario = document.getElementById('saldoAtual');



//texto aviso
let texto = document.getElementById('aviso')
let exercicio = document.getElementById('exercicio')



btnEnviar.addEventListener('click', function(e){
    
    //resultado
    let salario = parseFloat(cxSalario.value);
    let percentual = percentual_aumento(salario);
    let aumento = salario * ( percentual / 100 );
    let salarioAtual = parseFloat(salario + aumento).toFixed(2);
  
   
    console.log('salario atual: $',salario);
    console.log('porcentual de aumento:',percentual,'%');
    console.log('aumento de: R$',aumento.toFixed(2));
    console.log('novo salário = R$ ',salarioAtual);

        

    exercicio.remove();
    
    salarioAntesReajuste.innerHTML  = `Seu salario atual é de: R$ ${salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    percentualAumentado.innerHTML = `Percentual aumentado em seu salário é de ${ percentual}%`;
    valorAumento.innerHTML = `O Valor aumentado em seu salário é de: R$ ${aumento.toFixed(2)}`;

    
    novoSalario.innerHTML = `Seu novo salário é R$ ${salarioAtual}`
    novoSalario.classList.add('saldoAtual');


    

    //------------------------------------------------------------------
    
    //Caso valor inválido    
    let num1 = cxSalario.value;
    if( num1 <= 0 || num1 === '' ){
        
        exercicio.remove();
        salarioAntesReajuste.remove();
        percentualAumentado.remove();
        valorAumento.remove();
        novoSalario.remove();
        texto.innerHTML = `Valor inválido,  Informe seu salário Corretamente !!`;
        texto.classList.add('texto');
        texto.setAttribute('style', 'display: block')

        setTimeout(function(){
        
            texto.innerHTML = ''
            texto.remove()
            exercicio.remove();
            document.location.reload();
            
     
        }, 2000)

        e.preventDefault();
        
    }

    //-------------------------------------------------------------------   
    e.preventDefault();
})


//botao limpar ' para resetar formulario'
btnLimpar.addEventListener('click', (e) =>{

    
    salarioAntesReajuste.remove();
    percentualAumentado.remove();
    valorAumento.remove();
    novoSalario.remove();
    exercicio.remove();
    texto.innerHTML = `Preencha seu Salário`
    texto.classList.add('texto')
    texto.setAttribute('style', 'display: block')
    
    setTimeout(function(){
        
        
        texto.remove()
        document.location.reload();
        
 
    }, 2000)
 

    e.preventDefault();
})


function percentual_aumento(salario){
    if (salario <= 280){
        return 20
    }else if (salario<= 700){
        return 15
    }else if ( salario <= 1500){
        return 10
    }else 
        return 5

}

