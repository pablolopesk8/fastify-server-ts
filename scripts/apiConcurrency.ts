interface TransactionStatus {
  transactionId: string;
  status: 'APPROVED' | 'REJECTED' | 'PENDING';
  updatedAt: string;
}

async function fetchTransactionStatusFromExternalAPI(id: string): Promise<TransactionStatus> {
  const delay = Math.floor(Math.random() * 200) + 100;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return {
    transactionId: id,
    status: Math.random() > 0.2 ? 'APPROVED' : 'REJECTED',
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Função utilitária para executar tarefas assíncronas com um limite máximo de concorrência.
 *
 * @param items Array de itens para processar
 * @param concurrencyLimit Número máximo de promessas executando em paralelo simultaneamente
 * @param taskFn Função assíncrona executada para cada item
 */
async function mapWithConcurrencyLimit<T, R>(
  items: T[],
  concurrencyLimit: number,
  taskFn: (item: T) => Promise<R>
): Promise<unknown[]> {
  const results: unknown[] = new Array(items.length);
  console.log('results', results);
  let currentIndex = 0;

  const workers = Array.from({ length: concurrencyLimit }, async () => {
    console.log('currentIndex', currentIndex);
    console.log('items.length', items.length);
    while (currentIndex < items.length) {
      const index = currentIndex++;
      const item = items[index];
      console.log('item', item);

      try {
        // Executa a tarefa assíncrona
        results[index] = await taskFn(item);
      } catch (error) {
        console.error(`❌ Erro ao processar o item no índice ${index}:`, error);
        throw error; // Ou trate o erro armazenando em um array de falhas
      }
    }
  });
  console.log('workers', workers);

  // Aguarda todos os trabalhadores concluírem
  await Promise.all(workers);

  return results;
}

async function run() {
  const transactionIds = Array.from({ length: 100 }, (_, i) => `tx_${i + 1}`);

  console.log(`Starting to process ${transactionIds.length} transactions...`);
  console.time('Total time');

  const CONCURRENCY_LIMIT = 2;

  const statuses = await mapWithConcurrencyLimit(transactionIds, CONCURRENCY_LIMIT, async (id) => {
    const result = await fetchTransactionStatusFromExternalAPI(id);
    console.log(`✓ Transação ${id} obtida: ${result.status}`);
    return result;
  });

  console.timeEnd('Total time');
  console.log(`Transactions processed: ${statuses.length}`);
}

run();
