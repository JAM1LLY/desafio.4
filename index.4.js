const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  

  const totalMensal = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0);
  
  const percentuais = {};
  for (const estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / totalMensal) * 100;
    percentuais[estado] = percentual.toFixed(2); // Arredondar para 2 casas decimais
  }
  
 
  for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
  }
  