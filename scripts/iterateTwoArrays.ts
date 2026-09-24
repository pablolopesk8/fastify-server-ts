const customers = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const orders = [
  { orderId: 101, customerId: 1, amount: 250 },
  { orderId: 102, customerId: 2, amount: 450 },
  { orderId: 103, customerId: 3, amount: 300 },
  { orderId: 104, customerId: 1, amount: 150 },
];

// ✅ COMPLEXIDADE LINEAR: O(n + m)
// Step 1: Converte o array de clientes em um Map (Hash Table) -> O(m)
const customerMap = new Map(customers.map((c) => [c.id, c]));
console.log(customerMap);

// Step 2: Mapeia as ordens com busca O(1) no Map -> O(n)
const enrichedOrders = orders.map((order) => {
  const customer = customerMap.get(order.customerId); // Busca instantânea O(1)
  return { ...order, customerName: customer?.name };
});

console.log(enrichedOrders);
