import * as fs from 'fs';
import * as readline from 'readline';

interface Transaction {
  id: string;
  amount: number;
  status: string;
}

const filePath = import.meta.dirname + '/items.csv';
const batchSize = 100;

async function saveBatchToDatabase(batch: Transaction[]): Promise<void> {
  console.log(`Saving ${batch.length} records to the database...`);
  await new Promise((resolve) => setTimeout(resolve, 50));
}

const fileStream = fs.createReadStream(filePath, {
  encoding: 'utf-8',
  highWaterMark: 64 * 1024, // buffer size of 64KB
});

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

let currentBatch: Transaction[] = [];
let totalProcessed = 0;

console.log('Starting to process the file in batches...');

for await (const line of rl) {
  if (!line.trim()) continue;

  const [id, amountStr, status] = line.split(',');
  const transaction: Transaction = {
    id,
    amount: parseFloat(amountStr),
    status,
  };

  currentBatch.push(transaction);

  // 4. Quando o lote atinge o tamanho limite (batchSize), processa e esvazia a memória
  if (currentBatch.length >= batchSize) {
    await saveBatchToDatabase(currentBatch);
    totalProcessed += currentBatch.length;

    // Esvazia o array para liberar memória para o Garbage Collector
    currentBatch = [];
  }
}

if (currentBatch.length > 0) {
  await saveBatchToDatabase(currentBatch);
}

console.log(`Processed ${totalProcessed} records in total.`);
