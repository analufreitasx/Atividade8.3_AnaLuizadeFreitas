const salarioinicial = parseInt (prompt('Digite o salário inicial do funcionário: '))
if(salarioinicial < 280){
    const aumentopercent = 20
    const aumento_real = ((salarioinicial * 20)/100)
    const salario_reajuste = ((salarioinicial * 20)/100) + salarioinicial
    document.write(" Salário Inicial: " + salarioinicial + " <br> Percentual de Aumento: " + aumentopercent + " <br> Valor do aumento: " + aumento_real + " <br> Novo salário: " + salario_reajuste)
}
else if(salarioinicial > 280 && salarioinicial < 700){
    const aumentopercent = 15
    const aumento_real = ((salarioinicial * 15)/100)
    const salario_reajuste = ((salarioinicial * 15)/100) + salarioinicial
    document.write(" Salário Inicial: " + salarioinicial + "<br> Percentual de Aumento: " + aumentopercent + " <br> Valor do aumento: " + aumento_real + " <br> Novo salário: " + salario_reajuste)
}
else if(salarioinicial >=700 && salarioinicial<1500){
    const aumentopercent = 10
    const aumento_real = ((salarioinicial * 10)/100)
    const salario_reajuste = ((salarioinicial * 10)/100) + salarioinicial
    document.write(" Salário Inicial: " + salarioinicial + "<br> Percentual de Aumento: " + aumentopercent + " <br> Valor do aumento: " + aumento_real + " <br> Novo salário: " + salario_reajuste)
}
else if(salarioinicial >=1500){
    const aumentopercent = 5
    const aumento_real = ((salarioinicial * 5)/100)
    const salario_reajuste = ((salarioinicial * 5 )/100) + salarioinicial
    document.write(" Salário Inicial: " + salarioinicial + "<br> Percentual de Aumento: " + aumentopercent + " <br> Valor do aumento: " + aumento_real + " <br> Novo salário: " + salario_reajuste)
}
