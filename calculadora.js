function calcularPedra() {
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const espessura = parseFloat(document.getElementById('espessura').value);
    const densidade = parseFloat(document.getElementById('tipoPedra').value);
  
    if (isNaN(comprimento) || isNaN(largura) || isNaN(espessura)) {
      document.getElementById('resultado').textContent = "⚠️ Por favor, preencha todos os campos corretamente.";
      return;
    }
  
    const area = comprimento * largura;
    const espessuraM = espessura / 100;
    const volume = area * espessuraM;
    const peso = volume * densidade;
  
    document.getElementById('resultado').innerHTML = `
      ✅ <strong>Resultado:</strong><br>
      Volume: <strong>${volume.toFixed(2)}</strong> m³<br>
      Peso estimado: <strong>${peso.toFixed(0)}</strong> kg
    `;
  }