/**
 * Script de Teste Rápido do ChatBot
 * 
 * Este script verifica se a OpenAI API está configurada corretamente
 * e testa uma requisição simples.
 * 
 * Uso: node test-chatbot.js
 */ 

require('dotenv').config();
const OpenAI = require('openai');

console.log('🧪 Testando configuração do ChatBot...\n');

// Verificar se a chave está configurada
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey || apiKey === 'sua_openai_api_key_aqui' || apiKey === 'dummy-key') {
  console.log('❌ OPENAI_API_KEY não configurada ou inválida');
  console.log('\n📝 Para configurar:');
  console.log('1. Acesse: https://platform.openai.com/api-keys');
  console.log('2. Crie uma nova chave');
  console.log('3. Adicione no arquivo .env:');
  console.log('   OPENAI_API_KEY=sk-sua-chave-aqui\n');
  console.log('⚠️  O ChatBot funcionará em modo FALLBACK (sem IA)\n');
  process.exit(1);
}

console.log('✅ OPENAI_API_KEY encontrada');
console.log(`   Chave: ${apiKey.substring(0, 7)}...${apiKey.substring(apiKey.length - 4)}\n`);

// Testar conexão com OpenAI
const openai = new OpenAI({
  apiKey: apiKey,
});

console.log('🔄 Testando conexão com OpenAI API...\n');

openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'system',
      content: 'Você é um assistente de teste. Responda apenas "OK" se estiver funcionando.',
    },
    {
      role: 'user',
      content: 'Teste',
    },
  ],
  max_tokens: 10,
})
  .then((response) => {
    console.log('✅ Conexão com OpenAI API bem-sucedida!');
    console.log(`   Resposta: ${response.choices[0].message.content}\n`);
    console.log('🎉 O ChatBot está configurado corretamente e usará IA real!\n');
    process.exit(0);
  })
  .catch((error) => {
    console.log('❌ Erro ao conectar com OpenAI API:');
    console.log(`   ${error.message}\n`);
    
    if (error.status === 401) {
      console.log('💡 A chave API parece estar inválida.');
      console.log('   Verifique se copiou a chave completa.\n');
    } else if (error.status === 429) {
      console.log('💡 Você atingiu o limite de requisições.');
      console.log('   Aguarde alguns minutos ou verifique seu plano na OpenAI.\n');
    } else {
      console.log('💡 Verifique sua conexão com a internet.\n');
    }
    
    console.log('⚠️  O ChatBot usará modo FALLBACK até o problema ser resolvido.\n');
    process.exit(1);
  });

