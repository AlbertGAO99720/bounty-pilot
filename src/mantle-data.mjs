import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);

const NETWORKS = [
  {
    name: "Mantle Mainnet",
    chainId: 5000,
    rpcUrl: process.env.MANTLE_MAINNET_RPC_URL || "https://rpc.mantle.xyz",
    explorer: "https://explorer.mantle.xyz"
  },
  {
    name: "Mantle Sepolia",
    chainId: 5003,
    rpcUrl: process.env.MANTLE_SEPOLIA_RPC_URL || "https://rpc.sepolia.mantle.xyz",
    explorer: "https://explorer.sepolia.mantle.xyz"
  }
];

async function callJsonRpcWithFetch(rpcUrl, method, params) {
  const response = await fetch(rpcUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
    signal: AbortSignal.timeout(10_000)
  });

  if (!response.ok) {
    throw new Error(`RPC HTTP ${response.status}`);
  }

  return response.json();
}

async function callJsonRpcWithCurl(rpcUrl, method, params) {
  const payload = JSON.stringify({ jsonrpc: "2.0", id: 1, method, params });
  const { stdout } = await execFileAsync(
    "curl",
    ["-sS", "--max-time", "15", "-H", "content-type: application/json", "--data", payload, rpcUrl],
    { maxBuffer: 1024 * 1024 }
  );
  return JSON.parse(stdout);
}

export async function callJsonRpc(rpcUrl, method, params = []) {
  try {
    return await callJsonRpcWithFetch(rpcUrl, method, params);
  } catch (fetchError) {
    const result = await callJsonRpcWithCurl(rpcUrl, method, params);
    return {
      ...result,
      transportFallback: "curl",
      fetchError: fetchError.message
    };
  }
}

export async function readMantleNetwork(network) {
  const [chain, blockNumberResult] = await Promise.all([
    callJsonRpc(network.rpcUrl, "eth_chainId"),
    callJsonRpc(network.rpcUrl, "eth_blockNumber")
  ]);

  if (chain.error) throw new Error(`${network.name} chainId error: ${chain.error.message}`);
  if (blockNumberResult.error) throw new Error(`${network.name} blockNumber error: ${blockNumberResult.error.message}`);

  const blockNumber = Number.parseInt(blockNumberResult.result, 16);
  const latestBlock = await callJsonRpc(network.rpcUrl, "eth_getBlockByNumber", [blockNumberResult.result, false]);
  if (latestBlock.error) throw new Error(`${network.name} block error: ${latestBlock.error.message}`);

  return {
    name: network.name,
    expectedChainId: network.chainId,
    observedChainId: Number.parseInt(chain.result, 16),
    latestBlock: blockNumber,
    latestBlockHash: latestBlock.result?.hash || null,
    latestBlockTimestamp: latestBlock.result?.timestamp
      ? new Date(Number.parseInt(latestBlock.result.timestamp, 16) * 1000).toISOString()
      : null,
    explorer: network.explorer,
    rpc: network.rpcUrl,
    transportFallback: chain.transportFallback || blockNumberResult.transportFallback || latestBlock.transportFallback || null
  };
}

export async function readMantleData(networks = NETWORKS) {
  const results = [];
  for (const network of networks) {
    results.push(await readMantleNetwork(network));
  }
  return {
    generatedAt: new Date().toISOString(),
    mode: "read-only",
    safety: "No wallet, private key, signature, transaction, or deployment is used.",
    networks: results
  };
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
  const data = await readMantleData();
  console.log(JSON.stringify(data, null, 2));
}
